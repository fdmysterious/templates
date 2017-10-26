#include <lib/catch.hpp>

TEST_CASE( "Test de test de module, lel", "[unit]")
{
    REQUIRE( 1 == 1 );
}

TEST_CASE( "Test qui ne marche pas, lel", "[fault]" )
{
    REQUIRE( 3.14 >= 4768 );
}
