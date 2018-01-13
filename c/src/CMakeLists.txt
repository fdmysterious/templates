
add_library(
    main_lib

    sys/log.c
    app.c
)

add_executable(
    app
    main.c
)

target_include_directories( app PUBLIC ${CMAKE_CURRENT_SOURCE_DIR} )

set_target_properties(
    app
    PROPERTIES
    COMPILE_FLAGS "-include \"stdbool.h\""
)

target_link_libraries(
    app
    main_lib
)
