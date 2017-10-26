cmake_minimum_required( VERSION 3.6  )
project               ( cpp_template )

set( SRCS
    src/log.cpp
    src/app.cpp
)

set( SRCS_TESTS
    tests/test_module.cpp
)

set( APPNAME test_app )

#########################################
# Compiler configuration
#########################################
set( CMAKE_CXX_STANDARD 17 )
set( CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wpedantic" )
add_definitions(
    -DAPPNAME="${APPNAME}"
)
set( CMAKE_CXX_FLAGS_DEBUG "${CMAKE_CXX_FLAGS_DEBUG} -DBUILD_DEBUG" )

include_directories(
    .
    src/
)

#########################################
# Main target
#########################################
add_executable(
    app

    ${SRCS}
    src/main.cpp
)


#########################################
# Test target
#########################################
add_executable(
    unit_tests

    ${SRCS}
    ${SRCS_TESTS}
    tests/main.cpp
)

## Adding BUILD_TESTS Definition
set_target_properties(
    unit_tests
    PROPERTIES 
    COMPILE_DEFINITIONS BUILD_TESTS
)

## Now, running the unit_tests after building
# TODO : Maybe try to make these with CTest
add_custom_target( run_unit_tests ALL
    DEPENDS unit_tests
    COMMAND ./unit_tests
)
