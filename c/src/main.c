/**********
 * main.c *
 **********
 Author      : Florian Dupeyron (Floolfy)
 Description : Program cycle handling here
*/

#include <stdlib.h>
#include <stdio.h>
#include <signal.h>
#include <inttypes.h>
#include <stdbool.h>

//////////////////////////////////////////
// App functions prototypes
//////////////////////////////////////////
bool    app_init( const int argc, const char * argv[] );
uint8_t app_run();
void    app_exit();

//////////////////////////////////////////
// Signal handler
//////////////////////////////////////////
void sig_handler( int sig )
{
    int ret = EXIT_FAILURE;
    // TODO // Logging with proper routines
    switch( sig ) {
        case SIGSEGV:
        fprintf( stderr, "Segmentation fault :(\n" );
        break;

        case SIGINT:
        fprintf( stderr, "Caught interruption\n" );
        ret = EXIT_SUCCESS;
        break;

        case SIGTERM:
        fprintf( stderr, "Caught termination signal\n" );
        break;

        default: // TODO // Add SIGALRM handling
        fprintf( stderr, "Caught uknown signal, exiting" );
        break;
    }

    app_exit();
    exit( ret );
}

void setup_signal( const int s )
{
    signal( s, &sig_handler );
}

int main( const int argc, const char * argv[] )
{
    uint8_t status = EXIT_SUCCESS;
    // TODO // Log init
    
    // Signal setup //
    setup_signal( SIGABRT );
    setup_signal( SIGINT  );
    setup_signal( SIGILL  );
    setup_signal( SIGINT  );
    setup_signal( SIGSEGV );
    setup_signal( SIGTERM );
    // End of section //

    // App init and run //
    if( !app_init( argc, argv ) ) {
        fprintf(stderr, "Error when app init\n");
        exit( EXIT_FAILURE );
    }
    status = app_run();
    // End of section //

    // App closing //
    app_exit();
    // TODO // Log close
    // End of section //

    return status;
}
