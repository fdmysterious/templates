/***********
 * sys/log *
 ***********
 Author      : Florian Dupeyron (Floolfy)
 Description : Basic log routines
*/

// Headers //
#include "log.h"
// End of section //

void log_open( const char * name )
{
	#ifdef BUILD_DEBUG
	setlogmask( LOG_UPTO(LOG_DEBUG) );
	#else
	setlogmask( LOG_UPTO(LOG_NOTICE) );
	#endif

	openlog( name, LOG_PERROR | LOG_PID | LOG_NDELAY, LOG_USER );
}

void log_close()
{
	closelog();
}

