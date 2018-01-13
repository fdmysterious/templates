cmake_minimum_required( VERSION 3.6  )
project               ( c_template )
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
include( "cmake/tools.cmake"     )

#########################################
# Libraries
#########################################
add_subdirectory( lib )

#########################################
# Main target
#########################################
add_subdirectory( src )

#########################################
# Test targets
#########################################
add_subdirectory( tests )
