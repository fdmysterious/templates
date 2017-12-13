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

#include <spdlog/spdlog.h>
#include <log.hpp>
// End of section //

namespace spd = spdlog;
using namespace std::chrono_literals;

namespace app
{
    void init( const int & argc, const char * argv[] )
    {
        plog("main") -> info("init stuff here");
    }

    void run()
    {
        plog("main") -> info("Running");
        for(;;) std::this_thread::sleep_for( 1s );
    }

    void exit()
    {
        plog("main")-> info("Now leaving !");
    }
}
