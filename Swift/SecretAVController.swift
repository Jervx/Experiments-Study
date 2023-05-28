
// Jerbee Paragas BSIT 4YB-2
// 1st View Contoller
import UIKit;
import AVFoundation

class SecretAVController : UIViewContoller{
    var audioPlayer = AVAudioPlayer();

    func playSoundWith(fileName: String, fileExtension: String) -> Void {
        let audioSourceURL: URL!;
        audioSourceURL = Bundle.main.url(forResource: fileName, withExtension: fileExtension);
        if audioSourceURL == nil {
            print("Requested song cannot be played!");
        } else {
            do {
                audioPlayer = try AVAudioPlayer.init(contentsOf: audioSourceURL!);
                audioPlayer.prepareToPlay();
                audioPlayer.play();
                print("Now Playing: \(fileName)");
            }catch{
                print(error);
            }
        }
    }
    
    @IBAction func PlayBtn (_ sender : UIButton ){
        playSoundWith(fileName: "cupid", fileExtension: "mp3");
    }

    @IBAction func PauseBtn (_ sender : UIButton ){
        audioPlayer.stop();
        audioPlayer.currentTime = 0;
    }

    @IBAction func StopBtn (_ sender : UIButton ){ audioPlayer.stop(); }

    @IBAction func volumeControl(_ sender: UISlider) { myAudioPlayer.volume = sender.value; }

    override func viewDidLoad() { super.viewDidLoad(); }
}