/*******************
 * audio functions *
 *******************
 Author      : Florian Dupeyron (My?terious)
 Description : Simple audio functons
*/

// Includes //
#include "audio.hpp"
#include <random>
// End of section //

namespace audio
{
    // Some vars //
    std::random_device rnd;
    std::mt19937 device( rnd() );
    std::uniform_real_distribution< float > dist( -0.25f, 0.25f );
    // End of section //

    void init( const int & argc, const char * argv[] )
    {
    }

    inline float next_random() { return dist( device ); }

    void process( float * buffer, std::uint32_t nSamples )
    {
        static size_t i = 0;

        for( i = 0 ; i < nSamples ; i++ ) {
            buffer[i] = next_random();
        }
    }

    void exit()
    {
    }
}

