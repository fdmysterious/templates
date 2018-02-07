function( add_debug_target target_name )
    message( STATUS "Adding ${target_name} debug target")

    add_custom_target(
        debug-${target_name}
        COMMAND gdb ${target_name}
        DEPENDS ${target_name}
    )
endfunction( add_debug_target )
