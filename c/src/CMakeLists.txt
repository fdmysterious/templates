add_library(
    main_lib
    app.c
)

add_executable(
    app
    main.c
)

set_target_properties(
    app
    PROPERTIES
    COMPILE_FLAGS "-include \"stdbool.h\""
)

target_link_libraries(
    app
    main_lib
)
