set( CMAKE_CXX_STANDARD 17 )
set( CMAKE_C_STANDARD   99 )
# TODO # Cross compiler definitions
set( CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall -pedantic -pthread -fopenmp" )
add_definitions(
    -DAPPNAME="${APPNAME}"
)
set( CMAKE_CXX_FLAGS_DEBUG "${CMAKE_CXX_FLAGS_DEBUG} -DBUILD_DEBUG" )

set( CMAKE_C_FLAGS       "${CMAKE_C_FLAGS} -Wall -pedantic -pthread -fopenmp")
set( CMAKE_C_FLAGS_DEBUG "${CMAKE_C_FLAGS_DEBUG} -DBUILD_DEBUG" )

include_directories(
    .
    src/

    lib/spdlog/include # TODO # Move this in lib/CMakeLists
)
