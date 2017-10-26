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
// End of section //

namespace app
{
    void init( const int & argc, const char * argv[] )
    {
        std::cout << "Init some stuff here" << std::endl;
    }

    void run()
    {
        std::cout << "Hello world !" << std::endl;
        for(;;) std::this_thread::sleep_for( std::chrono::seconds(1) ); //INFINIIIIITE
    }

    void exit()
    {
        std::cout << "And now time for exit !" << std::endl;
    }
}
