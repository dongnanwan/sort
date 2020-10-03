class Queue{
    constructor(val){
        this.s1 = []
        this.s2 = []
    }

    enqueue(item){
        this.s1.push(item)
    }

    dequeue(){
        while(this.s1.length > 0){
            this.s2.push(s1.pop())
        }
        if(this.s2.length > 0){
            return this.s2.pop()
        }
    }
}