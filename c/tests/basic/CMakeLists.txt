add_executable(
    test-basic.bin
    basic.c
)

target_link_libraries(
    test-basic.bin
    main_lib
)

add_test( test-basic test-basic.bin )
