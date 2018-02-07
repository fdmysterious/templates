/*****************
 * {{ appName }} *
 *****************
 Author : Florian Dupeyron (My?terious)
 Description : 
    {{ appDesc }}
*/

// Include //
#include <iostream>
#include <chrono>
#include <thread>

#include <csignal>

#include <spdlog/spdlog.h>
#include <log.hpp>

#include <jack/jack.h>

#include "audio.hpp"
// End of section //

namespace spd = spdlog;
using namespace std::chrono_literals;

namespace app
{
    // State vars //
    const char * client_name = "Hello jack";
    jack_options_t options = JackNullOption;
    jack_status_t status;

    jack_port_t   * output_port;
    jack_client_t * client;
    // End of section //


    //////////////////////////////////////////
    // Jack functions
    //////////////////////////////////////////
    void jack_shutdown( void * arg )
    {
        plog("main")->warn("Jack closed, closing app");
        raise( SIGINT );
    }

    int process( jack_nframes_t nframes, void * arg )
    {
        // Getting buffer //
        jack_default_audio_sample_t * out;
        out = (jack_default_audio_sample_t*)jack_port_get_buffer( output_port, nframes );
        // End of section //

        // Putting some fancyness in it //
        audio::process( (float*) out, (std::uint32_t)nframes );
        // End of section //
        
        return 0;
    }

    //////////////////////////////////////////
    // Main app functions
    //////////////////////////////////////////
    void init( const int & argc, const char * argv[] )
    {
        plog("main")->info("Opening client");
        client = jack_client_open( client_name, options, &status, NULL );

        if( client == NULL ) {
            if( status & JackServerFailed ) {
                throw std::runtime_error("Unable to connect to server");
            }

            else throw std::runtime_error( "Unable to open jack client :(" );
        }

        else if ( status & JackNameNotUnique ) {
            client_name = jack_get_client_name( client );
            plog("main")->info( "Got unique client name : %s", client_name );
        }

        jack_set_process_callback( client, process, 0 );
        jack_on_shutdown( client, jack_shutdown, 0 );

        plog("main")->info( "Sample rate : %d", jack_get_sample_rate( client ) );

        // Registering output port //
        output_port = jack_port_register(
                client,
                "out",
                JACK_DEFAULT_AUDIO_TYPE,
                JackPortIsOutput,
                0
        );

        if( output_port == NULL ) throw std::runtime_error("Cannot initialize output port !");
        audio::init( argc, argv );

        if( jack_activate( client ) ) throw std::runtime_error("Cannot activate client !");
        // End of section //
        
    }

    void run()
    {
        plog("main")->info("Running");
        for(;;) std::this_thread::sleep_for( 100ms );
    }

    void exit()
    {
        plog("main")->info("Now leaving !");

        jack_deactivate( client );
        audio::exit();

        jack_port_unregister( client, output_port );
        jack_client_close( client );
    }
}
