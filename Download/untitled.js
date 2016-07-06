//动态修复bug－－－－－－－－－－－－－－－－－－－－－

//获取 ConfirmPaymentController －－－－－－－－－－－－－－－－－－
defineClass('ConfirmPaymentController', {

	//重写 textFieldDidChange 方法
	textFieldDidChange: function(textField){

		require('NSString','PayStoreView');

		if(textField == self.nameTextField()){
			if(textField.text().length() > 25){
       		     textField.setText(textField.text().substringToIndex(25));
			}
		}else{
			//商品数量输入时的处理
       		var index = textField.tag() - 20;
       		var numStr;
       		var storeView = (PayStoreView * ) self.view().viewWithTag(100 + index);
        	if (textField.text().intValue() > storeView.max_num()) {
       		    self.makeToastWith(NSString.stringWithFormat("特价商品最多支持购买%d件", storeView.max_num()));
        	    textField.setText(NSString.stringWithFormat("%d", storeView.max_num()));
        	}
        	numStr = textField.text();
       		//计算价格
        	self.setOrderPriceWith_and(textField.text(), index);
       	}
	}
}