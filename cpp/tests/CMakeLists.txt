add_library(
    test_core
    main.cpp
)

target_link_libraries(
    test_core
    main_lib
)

#########################################
file( GLOB        SRCS_TEST "${CMAKE_SOURCE_DIR}/tests/*.cpp"    )
list( REMOVE_ITEM SRCS_TEST "${CMAKE_SOURCE_DIR}/tests/main.cpp" )

foreach( test_file ${SRCS_TEST} )
    get_filename_component(
        test_file_name
        ${test_file}
        NAME_WE
    )
    message( STATUS "Adding test program : ${test_file_name}")

    add_executable(
        ${test_file_name}.bin
        ${test_file}
    )
    
    target_link_libraries(
        ${test_file_name}.bin
        test_core
    )

    add_test( ${test_file_name} ${test_file_name}.bin )
endforeach( test_file )
#########################################
