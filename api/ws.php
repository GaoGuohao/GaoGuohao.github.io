
$io->run();

<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
<!--         <meta http-equiv="refresh" content="1;url=http://192.168.0.3:8000/login.php">
 -->        <title>iOS开发</title>
    </head>
    <body>
        <?php

        	/***服务端****/

		/**
 		* 实例化
		 */
		$io = new SocketIO('192.168.0.16',8000);

		/**
		 * 监听连接
 		*/
		$io->on('connect',function($ws,$uid){
		$msg = "任意数据类型，结构需要和前端协议，便于通信"；
    	$ws->broadcast(evet, $msg);
    	//$ws->emit(evet, $uid, $msg);
		});


		/**
 		* 任意事件，与前端协议好，// evet 由开发者定义
 		*/
		$io->on('event',function($ws,$uid,$msg){
    		$msg = "任意数据类型，结构需要和前端协议，便于通信"；
    	$ws->broadcast(evet, $msg); 
		});


		/*
		* 关闭
		*/
		$io->on('close',function($ws,$uid,$err){
    	// evet 由开发者定义
    	$msg = "任意数据类型，结构需要和前端协议，便于通信"；
    		$ws->broadcast('close', $msg);
		});


		/**
 		* 启动
 		*/
        ?>

        <a href="http://192.168.0.3:8000/Download/jiehundinggou_AppStore_4.2.2.ipa" target="_blank">下载ipa文件</a>
                <a href="http://192.168.0.3:8000/Download/demo.js" target="_blank">下载js文件</a>

<!--         <a href="action=download-manifest&url=http://192.168.0.3:8000/Download/demo.js">下载js文件</a>
 -->
    </body>
</html>