/*****************
 * {{ appName }} *
 *****************
 Author      : Florian Dupeyron (My?terious)
 Description : See app.cpp for app info. Here's just some program cycle handling.
*/
#include <cstdlib> // :'(
#include <csignal>

#include <iostream>
#include <exception>
#include <syslog.h>

#include <spdlog/spdlog.h>
#include <spdlog/sinks/ansicolor_sink.h>
#include <log.hpp>

namespace app
{
    void init( const int & argc, const char * argv[] );
    void run (); // No args ; some global vars must be initialized
    void exit(); // To clean stuff up
}

// TODO // Improve this function to be what it needs to be : an interrupt routine
void sig_handler( int sig )
{
    switch( sig )
    {
        case SIGSEGV:
        plog("main")-> critical("Caught segmentation signal");
        break;

        case SIGINT:
        plog("main")->warn("Caught interruption");
        break;

        case SIGTERM:
        plog("main")->warn("Caught interruption");
        break;

        default:
        plog("main")->warn("Caught signal. Exiting.");
    }

    app::exit();
    plog.close();
    std::exit( EXIT_FAILURE );
}

inline void setup_signal( const int s )
{
    std::signal( s, &sig_handler );
}

int main(int argc, const char *argv[])
{
    std::uint8_t status = EXIT_SUCCESS; // Everything's fine for now

    plog.init();

    try
    {
        // Signal handlers install //
        setup_signal( SIGABRT );
        setup_signal( SIGINT  );
        setup_signal( SIGILL  );
        setup_signal( SIGINT  );
        setup_signal( SIGSEGV );
        setup_signal( SIGTERM );
        // End of section //

        app::init( argc, argv );
        app::run ();
    }
    
    catch( const std::exception & e )
    {
        //syslog( LOG_CRIT, "Caught exception : %s", e.what() );
        plog("main")->critical ( "Caught exception : {}", e.what() );
        status = EXIT_FAILURE; // :'(
    }
    app::exit();
    // End of section //
    
    plog.close();
    return status;
}
