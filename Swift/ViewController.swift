// Jerbee Paragas BSIT 4YB-2

import UIKit;

class ViewController : UIViewContoller{
    @IBOutlet var email : UITextField;
    @IBOutlet var password : UITextField;
    
    @IBAction func LoginBtn (_ sender : UIButton ){
        if email.text == 'Jervx' && password.text == "hello123456" {
            let vc = storyboard?.instantiateViewContoller(identifier : "sec_vc") as! SecondViewController;
            present(vc);
        }
    }
    
    override func viewDidLoad() { super.viewDidLoad() }
}

