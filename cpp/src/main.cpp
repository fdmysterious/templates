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

#include "log.hpp"

namespace app
{
    void init( const int & argc, const char * argv[] );
    void run (); // No args ; some global vars must be initialized
    void exit(); // To clean stuff up
}

void sig_handler( int sig )
{
    switch( sig )
    {
        case SIGSEGV:
        log_main.critic("SIGSEGV") << "Segmentation fault !";
        break;

        case SIGINT:
        log_main.notice("SIGINT") << "Interruption signal !";
        break;

        case SIGTERM:
        log_main.warn("SIGTERM") << "Caught termination request";
        break;

        default:
        log_main.warn("main.cpp:32") << "Caught signal !";
    }

    app::exit();
    std::exit( EXIT_FAILURE );
}

inline void setup_signal( const int s )
{
    std::signal( s, &sig_handler );
}

int main(int argc, const char *argv[])
{
    std::uint8_t status = EXIT_SUCCESS; // Everything's fine for now

    //openlog( "{{ appName }}", LOG_CONS | LOG_PERROR , LOG_USER );

    //#ifdef BUILD_DEBUG
    //setlogmask( LOG_UPTO(LOG_DEBUG) );
    //#endif
    // Program cycle //
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
        log_main.critic( "main.cpp:67" ) << "Caught exception : " << e.what();
        status = EXIT_FAILURE; // :'(
    }
    app::exit();
    // End of section //
    
    return status;
}
