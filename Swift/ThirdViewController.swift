// Jerbee Paragas BSIT 4YB-2

import UIKit;
class ThirdViewController : UIViewContoller{

    @IBOutlet var AboutResult : UILabel!
    @IBOutlet var ResultField : UITextField!
    @IBOutlet var n1: UITextField!
    @IBOutlet var n2: UITextField!
    
    @IBAction func SgmntCtrl(_ sender : UISegmentedControl){
        let idx = sender.selectedSegmentIndex;
        if(idx==0){ AboutResult.text="This is about ITEL"}
        else if(idx==1){ AboutResult.text="This is about Jervx"}
        else if(idx==2){ AboutResult.text="This is about Caleb"}
        else AboutResult.text="-"
    }

    @IBAction func Add(_ sender : Any){
        let nn = Int(n1.text!)
        let nn2 = Int(n2.text!)
        let sum = Int(nn! + nn2!)
        ResultField.text = "\(sum)";
    }

    @IBAction func Back(_ sender : Any){
        let vc = storyboard?.instantiateViewContoller(identifier : "sec_vc") as! ViewController;
        present(vc, animated : true)
    }

    override func viewDidLoad() { super.viewDidLoad() }
}

