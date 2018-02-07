/***********
 * log.hpp *
 ***********
 Author : Florian Dupeyron (My?terious)
 Description : Log facilities using spdlog
*/

// Headers //
#include "log.hpp"
// End of section //

namespace spd = spdlog;

void C_Log::init()
{
    // TODO // Add Windows thing
    spd::set_async_mode( 8192 ); // TODO // Config var ?

    std::vector< spdlog::sink_ptr > sinks {
        std::make_shared<spdlog::sinks::ansicolor_stderr_sink_mt>()
};

    auto lg = std::make_shared<spd::logger>( "main", std::begin( sinks ), std::end( sinks ) );

    spd::register_logger( lg );
}

void C_Log::close()
{
    spdlog::drop_all();
}

std::shared_ptr< spdlog::logger > C_Log::operator()( const char * name )
{
    return spdlog::get( name );
}

C_Log plog;
