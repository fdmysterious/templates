set( CMAKE_CXX_STANDARD 17 )
# TODO # Cross compiler definitions
set( CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall -pedantic -pthread -fopenmp" )
add_definitions(
    -DAPPNAME="${APPNAME}"
)
set( CMAKE_CXX_FLAGS_DEBUG "${CMAKE_CXX_FLAGS_DEBUG} -DBUILD_DEBUG" )

include_directories(
    .
    src/

    lib/spdlog/include # TODO # Move this in lib/CMakeLists
)
