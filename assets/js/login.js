$(function(){

    $("#link-login").click(function(){
        $(".reg-box").hide();
        $(".login-box").show();
    })
    $("#link-reg").click(function(){
        $(".reg-box").show();
        $(".login-box").hide();
    })


    layui.use(['layer', 'form'], function(){
 
        let form = layui.form;

        //提交
        form.on('submit(reg)', function(data){
            console.log(data)


            layer.msg(JSON.stringify(data.field));
            return false; 
        });


        form.on('submit(login)',function(data){

            console.log(data);
            layer.msg('这里是login 表单');
            return false;
        })

        form.verify({
            login_username:function(value,item){
                if(value.trim().length < 6 ||  value.trim().length > 12 ){
                    return '用户名必须6到12位，且不能出现空格';
                }
            },
            username: function(value, item){ //value：表单的值、item：表单的DOM对象

            if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
                return '用户名不能有特殊字符';
            }
            if (/(^\_)|(\__)|(\_+$)/.test(value)) {
                return '用户名首尾不能出现下划线\'_\'';
            }
            if (/^\d+\d+\d$/.test(value)) {
                return '用户名不能全为数字';
            }

            }
            
            //我们既支持上述函数式的方式，也支持下述数组的形式
            //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
            ,password: [
              /^[\S]{6,12}$/
              ,'密码必须6到12位，且不能出现空格'
            ],
            password2:function(value,item){
                let password = $(".reg-box input[name='password']").val();
                console.log(password);
                if(value !== password){
                    return '两次密码不一致'
                }
            } 
          });

    });
})