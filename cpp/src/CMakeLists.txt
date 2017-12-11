###############################
# Main target generate
###############################
file(
    GLOB
    SRCS
    "*.cpp"
)

list(
    REMOVE_ITEM
    SRCS
    "main.cpp"
)

add_library(
    main_lib
    ${SRCS}
)

target_link_libraries(
    main_lib
    ${LIBS}
)

#################################

add_executable(
    app
    main.cpp
)

target_link_libraries(
    app
    main_lib
)
