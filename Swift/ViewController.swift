// Jerbee Paragas BSIT 4YB-2

import UIKit;

class ViewController : UIViewContoller{
    @IBOutlet var accessKey : UITextField;
    
    @IBAction func OpenBtn (_ sender : UIButton ){
        if accessKey.text === 'cupid123' {
            let vc = storyboard?.instantiateViewContoller(identifier : "SecretAVContoller") as! SecretAVContoller;
            present(vc);
        }
    }
    
    override func viewDidLoad() { super.viewDidLoad() }
}
