import React from 'react'

class Body extends React.Component {

    constructor(props){
        super(props);
        this.updatedomain=this.updatedomain.bind(this);
    }

     updatedomain(){
        //paste domain list here
        // example var domains=["domain1","domain2","domain3","domain4","domain1","domain2","domain3","domain4"];
        var domains=["test1","C02c0tuar","C02c5ixii","C02cbccui","C02cd5d0s","C02cfo645","C02cj7d14","C02ckkb9t","C02cmeagm","C02cnm43n","C02cp9kbj","C02cyirxe","C02d2wzc9","C02d39plq","C02d75pp3","C02dbh1f5","C02djy3iu","C02dk31it","C02dm7c7a","C02duwjmb","C02dw1j3a","C02e0fg8i","C02e2mczp","C02e45by8","C02e7ps44","C02e7v2k6","C02eabou2","C02ebgr6f","C02efsgum","C02en3xkq","C02eozkll","C02eqvkrw","C02eta9qd","C02eu4rxx","C02eufswt","C02exg5x0","C02f2nlin","C02f46jqa","C02f7ebu9","C02f9hsjw","C02fafdoe","C02fbumd9","C02fcnvc1","C02fdvvjd","C02ffgt9z","C02fivcd0","C02fkjrm4","C02fmhb91","C02foxvcc","C02fs35nu","C02fwfpx6","C02g2tnpx","C02g3w0bw","C02g4yxde","C02ghztoh","C02gnqii8","C02gp9gow","C02h1cigh","C02h23bum","C02h4qcpp","C02haqj20","C02ho6emh","C02hs7e7b","C02hwe4b4","C02hxrp67","C02i3jkbt","C02i6h63a","C02iairkv","C02iawkiy","C02igjg5p","C02iismml","C02ima22j","C02iq36j1","C02iqelax","C02it6f5o","C02j0c2h0","C02j0ivnh","C02j15pb5","C02j16b77","C02j8o5s6","C02jfox8q","C02jg2f88","C02ji5s9d","C02jiyxk7","C02jm4bkw","C02jmo03s","C02jqpbe8","C02jtx9b7","C02jupsqt","C02jxlv1o","C02k1j26o","C02k34bm2","C02k4itbi","C02kcufuy","C02kcyx4b","C02kdr1yd","C02keh0pa","C02kihhby","C02kpgi14","C02kprw3s","C02ktjzd6","C02kx37r3","C02kxk1ep","C02l0d8tl","C02l7dszi","C02l9w1mn","C02ladfq7","C02ld0pbh","C02lgd5z1","C02lk60za","C02lkvtw8","C02loeu96","C02lt4k2w","C02lu2w7s","C02lv69a9","C02lx02n8","C02lx8808","C02m1sl71","C02m2zv46","C02mez6j6","C02mk0mw7","C02mk9hs8","C02mp5p42","C02mpmqsx","C02mq6fci","C02mrsqpw","C02ms2x1f","C02msoyyi","C02mvhupq","C02mzkpfo","C02n6xuqg","C02n7stqk","C02n93gs7","C02n9i3mr","C02nkgmnf","C02nl1r08","C02nqsv5g","C02nsiejk","C02nw25vx","C02nw4rao","C02nzfezk","C02o2pqz9","C02o5tnr1","C02o8k0ym","C02o8s45v","C02olaw4b","C02oo5gfs","C02ovx19i","C02oz24as","C02p002lk","C02p0mu1t","C02p2ixv8","C02p5ibv1","C02p773ik","C02p9lrqz","C02pekw5x","C02ph3f1l","C02pqeh3h","C02puae9i","C02pwtb04","C02q1by6p","C02q4nkwt","C02qadsx1","C02qdu75v","C02qg07sw","C02qjhatq","C02qkv294","C02qn7w2w","C02qoim1v","C02qp7pfx","C02qra6cm","C02qz4nl7","C02r3umwk","C02r5c1oa","C02r94glw","C02rbwesk","C02rg2825","C02rgy2fj","C02rj4qfa","C02rjok0z","C02rjq1ce","C02rjt0m3","C02rkad94","C02rrs746","C02rs72pm","C02rwyh4f","C02s1s2bq","C02s2luzu","C02safmo0","C02scmn12","C02sgjwdw","C02sgve4i","C02smwv5a","C02sraomk","C02ss1fvi","C02swzpni","C02sy60ja","C02sygtfe","C02t80mrg","C02tba6cq","C02tf4jb9","C02ti10yu","C02tpmd2q","C02tr5akl","C02tts98y","C02tuv1wb","C02twcds3","C02u1edsx","C02u4jbqk","C02u93ciy","C02uawcoy","C02ubd8jk","C02ucvyr2","C02ucwqhs","C02ul1oxu","C02unjqam","C02uq00wf","C02usct9o","C02uuawlx","C02uw50wx","C02uz5vfg","C02v1rvth","C02v38wq4","C02v514fr","C02vbj5ms","C02vfwdz6","C02vh06e3","C02vhc4wz","C02vhsvnt","C02vkc2lu","C02vl5y7f","C02vmf12e","C02vo2qs7","C02vo9fld","C02vyhgw4","C02w0yz9m","C02w83r74","C02wb0rta","C02wb5kr0","C02wer9f2"];
        for (let i = 0; i < domains.length; i++) {
            (function(index) {
                setTimeout(function() {
                    var response ="";
                    console.log("Domain "+domains[i])
                    //console.log(i++)
                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function() {
                        if (this.readyState === 4 && this.status === 200) {
                            response = xhttp.responsText;
                            console.log("ok"+response);
                        }
                    };
                    let URL="https://app.gmailsharedcontacts.com/api/group/contacts/restore/domain?id="
                    let TAIL="&daysAgo=60&to=20"
                    let UPDATED_URL=URL+domains[i]+TAIL
                    xhttp.open("GET",UPDATED_URL, true);
                    xhttp.withCredentials=true;
                    xhttp.send();
                }, i*2*60*1000);
            })(i);
        }
    }

    render() {
        return (
            <div>this is my body
            <div> <button type="submit" onClick = {this.updatedomain()}> UpdateDodmain </button>
            </div>
            </div>
                )
    }
}

export default Body;