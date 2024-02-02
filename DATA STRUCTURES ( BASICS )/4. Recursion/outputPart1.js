function func(n){
    if(n === 0) return;
    console.log(n);
    func(n - 1)
    console.log(n);
}

func(3)

function fun2(n){
    if(n === 0) return 
    fun2(n - 1)
    console.log(n);
    fun2(n - 1)
}

fun2(3)