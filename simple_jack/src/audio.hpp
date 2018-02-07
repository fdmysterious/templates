/*******************
 * audio functions *
 *******************
 Author      : Florian Dupeyron (My?terious)
 Description : Simple audio functons
*/

#pragma once

// Headers //
#include <cstdint>
// End of section //

namespace audio
{
    void init( const int & argc, const char * argv[] );
    void process( float * buffer, std::uint32_t nSamples );
    void exit();
}

