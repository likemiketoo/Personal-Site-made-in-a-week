$(document).ready(function(){												
   //Navigation Menu Slider
    $('#nav-expander').on('click',function(e)
    {
        e.preventDefault();
        $('body').toggleClass('nav-expanded');
    });
    
    $('#nav-close').on('click',function(e)
    {
        e.preventDefault();
        $('body').removeClass('nav-expanded');
    });
    
    $('.container-fluid').on('click',function(e)
    {
        e.preventDefault();
        $('body').removeClass('nav-expanded');
    });
    
    
    
    
    var $root = $('html, body');
    
    $('a').click(function()
    {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 900);
        return false;
    });
    
    
    
    var clickDisabled = false;
    
    var showText = function(target, message, index, interval)
    {   
        if(index < message.length)
        {
            $(target).append(message[index++]);
            timer=setTimeout(function()
            {
                showText(target, message, index, interval);
            }, interval);
        }
    }
    
    $("#htmlBtn").click(function()
    {
        if(clickDisabled)
        {
            return;
        }
        
        $(exampleBox).empty();
        showText("#exampleBox", '<h1> Hello World! </h1>', 0, 100);
        
        clickDisabled = true;
        setTimeout(function()
        {
            clickDisabled = false;
        }, 2800);
        
    });
    
    $("#cppBtn").click(function()
    {
        if(clickDisabled)
        {
            return;
        }
        
        $(exampleBox).empty();
        showText("#exampleBox", 'cout << "Hello World!";', 0, 100);
        
        clickDisabled = true;
        setTimeout(function()
        {
            clickDisabled = false;
        }, 2800);
        
    });
    
    $("#jsBtn").click(function()
    {
        if(clickDisabled)
        {
            return;
        }
        
        $(exampleBox).empty();
        showText("#exampleBox", 'console.log("Hello World!");', 0, 100);
        
        clickDisabled = true;
        setTimeout(function()
        {
            clickDisabled = false;
        }, 2800);
        
    });
    
    $("#jBtn").click(function()
    {
        if(clickDisabled)
        {
            return;
        }
        
        $(exampleBox).empty();
        showText("#exampleBox", 'System.out.println("Hello World!");', 0, 100);
        
        clickDisabled = true;
        setTimeout(function()
        {
            clickDisabled = false;
        }, 3500);
        
    });
    
    $("#jqBtn").click(function()
    {
        if(clickDisabled)
        {
            return;
        }
        
        $(exampleBox).empty();
        showText("#exampleBox", '$(document.body).append ("Hello World!");', 0, 100);
        
        clickDisabled = true;
        setTimeout(function()
        {
            clickDisabled = false;
        }, 4000);
        
    });
    
    $("#cBtn").click(function()
    {
        if(clickDisabled)
        {
            return;
        }
        
        $(exampleBox).empty();
        showText("#exampleBox", 'printf("Hello World!");', 0, 100);
        
        clickDisabled = true;
        setTimeout(function()
        {
            clickDisabled = false;
        }, 2800);
        
    });

 });