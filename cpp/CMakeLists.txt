cmake_minimum_required( VERSION 3.6  )
project               ( cpp_template )
enable_testing()

#########################################
# Main variables
#########################################
set( APPNAME test_app )
#set( LIBS )

#########################################
# Compiler configuration
#########################################
include( "cmake/toolchain.cmake" )

#########################################
# Main target
#########################################
add_subdirectory( src )

#########################################
# Test targets
#########################################
add_subdirectory( tests )
