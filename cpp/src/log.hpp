/******************
 * Log facilities *
 ******************/
// Author      : Florian Dupeyron (My,terious)
// Description : Log things

#pragma once

// Headers //
#include <sstream>
#include <syslog.h>
#include <iostream>
// End of section //

#define LOG_DEF_LVLFUNC( l, L ) \
    inline std::ostringstream & l( const char * src ) { \
        m_level = L; m_ss << "[" << src << "] "; return m_ss; \
    }
namespace mlog
{
    class Log
    {
        friend class LogEntry;

        public:
        Log()
        {
            openlog( APPNAME, 0, LOG_USER );
            #ifdef BUILD_DEBUG
            setlogmask( LOG_UPTO(LOG_DEBUG) );
            #endif
        }

        ~Log()
        {
            closelog();
        }

        private:
        std::ostringstream m_ss;
    };

    class LogEntry
    {
        public:
        LogEntry( Log & l ) : m_ss{ l.m_ss }{ m_ss.clear(); m_ss.str(""); }
        ~LogEntry()
        {
            std::string msg = m_ss.str();

            // Sending message //
            syslog( m_level, msg.c_str() );
            std::clog << msg.c_str() << std::endl;
            // End of section //
        }

        LOG_DEF_LVLFUNC( debug   , LOG_DEBUG   )
        LOG_DEF_LVLFUNC( verbose , LOG_INFO    )
        LOG_DEF_LVLFUNC( notice  , LOG_NOTICE  )
        LOG_DEF_LVLFUNC( warn    , LOG_WARNING )
        LOG_DEF_LVLFUNC( error   , LOG_ERR     )
        LOG_DEF_LVLFUNC( critic  , LOG_CRIT    )
        LOG_DEF_LVLFUNC( alert   , LOG_ALERT   )

        private:
        std::ostringstream & m_ss;
        int                  m_level;
    };

    extern Log main;
}

#define log_main mlog::LogEntry( mlog::main )
