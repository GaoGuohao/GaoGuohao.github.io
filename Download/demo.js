
//截取JSPatchTestViewController控制器的testPushViewController方法
defineClass('JSPatchTestViewController', {
  testPushViewController: function(sender) {
    var tableViewCtrl = JPTableViewController.alloc().init()
    self.navigationController().pushViewController_animated(tableViewCtrl, YES)
  }
})

//======Star========================================JPTableViewController===================================================
defineClass('JPTableViewController : UITableViewController <UIAlertViewDelegate>', {

  // init: function(){
  //    self = self.super().init()
  //    self.setProp_forKey("data")     //add new property (id data)
  //    return self;
  // },
   viewDidLoad: function(){
      self.setTitle("中国婚博会－中国最大的结婚平台")

      //发送网络请求
      self.requestBusinessList()


  },
    //获取商家列表信息
    requestBusinessList: function(){

        var requestUrl = "http://api2.jiehun.com.cn/common/search/store?app_id=10001&client_timestamp=1432791441148&_pn=0&app_usign=xRW6hqqNcMQsGzOu3OQfzRQkI6Q%3D&data_type=1&api_version=new&type=all&city_id=110900&client_version=4.2.0&client_guid=220991&sort=app_default&cate_id=hunshasheying"
        // var requestUrl = "http://localhost:8000/index.php"
        require('AFHTTPRequestOperationManager')
        var manager = AFHTTPRequestOperationManager.manager()
        manager.GET_parameters_success_failure(
          requestUrl,
          null, 
          block("AFHTTPRequestOperation*, id",function(operation, responseObject){

            console.log("网络请求成功" + responseObject)

            var data = require('NSArray').alloc().init()
            data = responseObject.objectForKey('data').objectForKey('list');
            // self.setProp_forKey(data, 'dataArray')


          }),
          block("AFHTTPRequestOperation*, NSError*",function(operation, error){

            console.log("网络请求失败" + error.userInfo())

          })
         )
   },


  dataSource: function() {
    var data = self.getProp('data')
    if (data) return data;
    var data = [];
    for (var i = 0; i < 20; i ++) {
      data.push("-------------------商家" + i);
    }
    self.setProp_forKey(data, 'data')
    return data;
  },

  numberOfSectionsInTableView: function(tableView) {
    return 1;
  },

  tableView_numberOfRowsInSection: function(tableView, section) {

    return self.dataSource().count();
    // var data = self.getProp('dataArray')
    // return data.count();
  },

  tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
    var cell = tableView.dequeueReusableCellWithIdentifier("cell") 
    if (!cell) {
       cell = require('BusinessCell').alloc().initWithStyle_reuseIdentifier(0, "cell")
    }
    // cell.textLabel().setText(self.dataSource().objectAtIndex(indexPath.row()))
    cell.loadData()
    return cell
  },

  tableView_heightForRowAtIndexPath: function(tableView, indexPath) {
    return 90
  },

  tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {

    tableView.deselectRowAtIndexPath_animated(indexPath,YES)

    if(indexPath.row()){
            
        var alertView = require('UIAlertView').alloc().initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles("Alert",self.dataSource().objectAtIndex(indexPath.row()), self, "OK", null);
        alertView.show()
            
    }else{
        var viewController = HunbohuiViewController.alloc().init()
                self.navigationController().pushViewController_animated(viewController, YES)
    }
   
},
  alertView_willDismissWithButtonIndex: function(alertView, idx) {
    console.log('click btn ' + alertView.buttonTitleAtIndex(idx).toJS())
  }
})

//======END========================================JPTableViewController===================================================



//======STAR========================================BusinessCell===========================================================
defineClass('BusinessCell : UITableViewCell',{

  initWithStyle_reuseIdentifier: function(style, reuseIdentifier){
      self = self.super().initWithStyle_reuseIdentifier(style, reuseIdentifier)
      if(self){

          require('UILabel, UIColor, UIImageView, NSURL')
          //Business logoImageView

          var imageView = UIImageView.alloc().initWithFrame({x:10, y:10, width:70, height:70})
          imageView.setBackgroundColor(UIColor.grayColor())
          self.addSubview(imageView)
          var imaegUrl = NSURL.URLWithString("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1070902365,2619384777&fm=116&gp=0.jpg")
          // imageView.sd__setImageWithURL(imaegUrl)
          // imageView.loadImage("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1070902365,2619384777&fm=116&gp=0.jpg")
          

          var labelName = UILabel.alloc().initWithFrame({x:90, y:10, width:220, height:30});
          labelName.setBackgroundColor(UIColor.redColor())
          labelName.setText("商家名称")
          self.addSubview(labelName)



      }
      return self;
  },


  awakeFromNib: function(){

  },

  loadData: function(){
      // self.textLabel().setText("势均力敌放假啊金德拉克附近的")
  },

})

//======END========================================BusinessCell===========================================================


//======STAR========================================HunbohuiViewController===========================================================

defineClass('HunbohuiViewController : UIViewController',{
    viewDidLoad: function(){
            
        self.setTitle("中国婚博会")
        self.view().setBackgroundColor(require('UIColor').whiteColor())
            
        //设置一个view
        var bannarView = require('UIView').alloc().initWithFrame({x:0, y:64, width:320, height:200})
        bannarView.setBackgroundColor(require('UIColor').redColor())
        self.view().addSubview(bannarView)
            
            
    },
})

//======END========================================HunbohuiViewController===========================================================

