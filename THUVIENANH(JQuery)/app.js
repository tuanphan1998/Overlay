
 	//  1   Tạo Overlay
		// gồm có hình ảnh + text
var $overlay = $('<div id="overlay"></div>');

var $img = $('<img>');

var $paragrap = $('<p></p>');

$overlay.append($img);
$overlay.append($paragrap);
$("body").append($overlay);

	$("#imageGalley").find('a').click(function(event)
	 {
	 	// do sự kiện click vào nút a nên mặc định thuộc tính 
	 	// nó sẽ nảy sang trang khác
	 	//ta có hàm preventDefault để khắc chế điều này
	 	event.preventDefault();
		//  2   Nạp overlay

		/* Act on the event */
		// lấy được giá trị href của thẻ a
		var $imgesOverlay = $(this).attr("href");
		$img.attr("src",$imgesOverlay);

		// thêm chú thích vào trong overlay
		var captionText = $(this).children("img").attr("alt");
		$paragrap.text(captionText);


		//   3   hiển thị Overlay
		$overlay.show();
		
	});

	$overlay.click(function(event)
	 {
		/* Act on the event */
		$overlay.hide();
	});