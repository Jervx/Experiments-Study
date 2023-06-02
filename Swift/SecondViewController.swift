// Jerbee Paragas BSIT 4YB-2

import UIKit;

class SecondViewController : UIViewContoller{

    @IBOutlet var lbl1 : UILabel!

    @IBAction func OnSlide(_ sender:UISlider){
        let curValue = sender.value;
        lbl1.font = UIFont.systemFont(CGFloat(curValue))
    }

    @IBAction func Back(_ sender : Any){
        let vc = storyboard?.instantiateViewContoller(identifier : "frst_vc") as! ViewController;
        present(vc, animated : true)
    }

    @IBAction func Next(_ sender : Any){
        let vc = storyboard?.instantiateViewContoller(identifier : "thrd_vc") as! ThirdViewController;
        present(vc, animated : true);
    }

    @IBAction func ChangeBg(_ sender :  UISwitch){
        self.view.backgroundColor = sender.isOn ? UIColor.yellow : UIColor.white;
    }
    
    override func viewDidLoad() { super.viewDidLoad() }
}

