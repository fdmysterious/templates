#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>
#include <inttypes.h>
#include <stdbool.h>

bool app_init( const int argc, const char * argv[] )
{
    fprintf( stderr, "Hello world !" );
    return true;
}

uint8_t app_run()
{
    for(;;) sleep( 100 );
    return EXIT_SUCCESS;
}

void app_exit()
{
    fprintf( stderr, "Bye !\n" );
}
