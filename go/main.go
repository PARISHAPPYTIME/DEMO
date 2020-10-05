package main
import (
    "io"
    "net/http"
    "log"
)   
// hello world, the web server
func HelloServer(w http.ResponseWriter, req *http.Request) {
    io.WriteString(w, "hello, world!\n")
}
func Test(w http.ResponseWriter, req *http.Request) {
	io.WriteString(w, "1 + 1")
}
func main() {
    http.HandleFunc("/hello2", HelloServer)
    http.HandleFunc("/test", Test)
    err := http.ListenAndServe(":12345", nil)
    if err != nil {
        log.Fatal("ListenAndServe: ", err)
    }
}