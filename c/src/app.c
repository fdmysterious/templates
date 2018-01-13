#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>
#include <inttypes.h>
#include <stdbool.h>

#include <sys/log.h>

bool app_init( const int argc, const char * argv[] )
{
    syslog( LOG_NOTICE, "Hello world !" );
    return true;
}

uint8_t app_run()
{
    for(;;) sleep( 100 );
    return EXIT_SUCCESS;
}

void app_exit()
{
    syslog( LOG_NOTICE, "Bye !" );
}
