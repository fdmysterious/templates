/***********
 * log.hpp *
 ***********
 Author : Florian Dupeyron (My?terious)
 Description : Log facilities using spdlog
*/

#pragma once

// headers //
#include <spdlog/spdlog.h>
// End of section //


class C_Log{
    public:
    static void init();
    static void close();
    std::shared_ptr< spdlog::logger > operator()( const char * name );
};

extern C_Log plog;
