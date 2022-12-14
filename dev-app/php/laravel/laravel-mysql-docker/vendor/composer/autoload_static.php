<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit660c65adf9e0da430f5269ac288c3191
{
    public static $prefixLengthsPsr4 = array (
        'T' => 
        array (
            'Tanaka\\React\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Tanaka\\React\\' => 
        array (
            0 => __DIR__ . '/../..' . '/task_management_app',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit660c65adf9e0da430f5269ac288c3191::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit660c65adf9e0da430f5269ac288c3191::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit660c65adf9e0da430f5269ac288c3191::$classMap;

        }, null, ClassLoader::class);
    }
}
