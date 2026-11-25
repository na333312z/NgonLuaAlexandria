/* =========================================================
   NGỌN LỬA Ở ALEXANDRIA · engine bản v1
   - Hội thoại, lựa chọn, cờ trạng thái: alexandria.ink (chạy bằng inkjs)
   - Bản đồ, đồng hồ nước, sổ phác thảo, minigame: file này
   ========================================================= */

/* ---------- Ảnh thật: thêm tên file vào đây khi đã có ảnh ----------
   Đặt ảnh vào thư mục assets/portraits/<id>.png, assets/bg/<id>.png, assets/items/<id>.png
   rồi ghi đường dẫn vào danh sách. Ảnh chưa có thì game tự vẽ hình tạm. */
const ASSETS = new Set([
  'bg/ban_an.png',
  'bg/ban_do.png',
  'bg/bang_thua.png',
  'bg/ben_dong.png',
  'bg/ben_dong_ngay.png',
  'bg/ben_tay.png',
  'bg/bep.png',
  'bg/cong.png',
  'bg/cong_vien.png',
  'bg/day_kho.png',
  'bg/den.png',
  'bg/den_thang.png',
  'bg/hanh_lang.png',
  'bg/hien_cot.png',
  'bg/nha_lys.png',
  'bg/phong_doc.png',
  'bg/phong_dorion.png',
  'bg/phong_na.png',
  'bg/phong_nikanor.png',
  'bg/san_bong_ro.png',
  'bg/san_dem.png',
  'bg/san_trong.png',
  'bg/trai.png',
  'bg/trong_kho.png',
  'items/item_bang_sap.png',
  'items/item_chen_tra.png',
  'items/item_cuon_chay.png',
  'items/item_cuon_sach.png',
  'items/item_day_gai.png',
  'items/item_giay_phep.png',
  'items/item_gio_may.png',
  'items/item_hop_go.png',
  'items/item_pinakes.png',
  'items/item_ruong.png',
  'portraits/be_dau_to.png',
  'portraits/dorion_dong.png',
  'portraits/dorion_nghe.png',
  'portraits/dorion_phan.png',
  'portraits/ga_ao_nau.png',
  'portraits/kimquy_mo.png',
  'portraits/kimquy_nham.png',
  'portraits/lysandros_cuoi.png',
  'portraits/lysandros_giu.png',
  'portraits/lysandros_om_hop.png',
  'portraits/myrto_chan.png',
  'portraits/myrto_ke.png',
  'portraits/myrto_om.png',
  'portraits/na_buon.png',
  'portraits/na_che_nang.png',
  'portraits/na_gian.png',
  'portraits/na_hieu.png',
  'portraits/na_ngac.png',
  'portraits/na_quyet.png',
  'portraits/nguyet_dem.png',
  'portraits/nguyet_lanh.png',
  'portraits/nguyet_mia.png',
  'portraits/nguyet_xin_loi.png',
  'portraits/nikanor_buon.png',
  'portraits/nikanor_hien.png',
  'portraits/nikanor_khung.png',
  'portraits/nikanor_lanh.png',
  'portraits/phuc_cuoi.png',
  'portraits/phuc_lo.png',
  'portraits/phuc_thi_tham.png',
  'portraits/phuc_tu_choi.png',
  'portraits/rufus_khai.png',
  'portraits/rufus_met.png',
  'portraits/theo_ba_ngon.png',
  'portraits/theo_hien.png',
  'portraits/theo_tram.png',
]);
const asset = p => ASSETS.has(p) ? 'assets/' + p.replace(/\.png$/, '.webp') : null;

const TOTAL_DROPS = 16;

/* ---------- Nhân vật ---------- */
const CHARS = {
  na:      {name:'Nhật Anh', def:'na_ngac', skin:'#e9bd93', hair:'#1b1b24', body:'#3f78b5', hairStyle:'messy'},
  phuc:    {name:'Phúc', def:'phuc_cuoi', skin:'#e2b088', hair:'#15151b', body:'#a4acb6', hairStyle:'short', tall:1},
  nguyet:  {name:'Nguyệt', def:'nguyet_lanh', skin:'#e8bf98', hair:'#101015', body:'#23262f', hairStyle:'pony'},
  theo:    {name:'Theophrastus', alias:'Ông già', def:'theo_hien', skin:'#d8a47b', hair:'#f1efe8', body:'#e9dcc0', hairStyle:'old', beard:'#f1efe8'},
  nikanor: {name:'Nikanor', def:'nikanor_hien', skin:'#c98f62', hair:'#3b3633', body:'#f2efe6', trim:'#3a6ea5', hairStyle:'short', ring:1},
  rufus:   {name:'Rufus', alias:'Viên đội trưởng', def:'rufus_met', skin:'#b9734b', hair:'#2a211c', body:'#b23a2a', armor:'#8b929a', hairStyle:'crop'},
  lys:     {name:'Lysandros', alias:'Ông lão', def:'lysandros_om_hop', skin:'#d3a07a', hair:'#e9e6dc', body:'#7d8a4a', hairStyle:'old', beard:'#e9e6dc'},
  myrto:   {name:'Myrto', alias:'Cô gái', def:'myrto_chan', skin:'#e0b18a', hair:'#3a2516', body:'#d9ccb0', hairStyle:'bun'},
  dorion:  {name:'Dorion', alias:'Vị tư tế', def:'dorion_dong', skin:'#cf9d76', hair:'#8d8a86', body:'#ece7db', trim:'#6f8a3c', hairStyle:'short', beard:'#8d8a86'},
  be:      {name:'Cậu bé', def:'be_dau_to', skin:'#a8714a', hair:'#151210', body:'#c9a46a', hairStyle:'short', small:1},
  ga:      {name:'Gã áo nâu', def:'ga_ao_nau', skin:'#b47b52', hair:'#1e1712', body:'#7a5233', hairStyle:'crop'},
  linh:    {name:'Lính gác', def:'linh', skin:'#b47b52', hair:'#1e1712', body:'#8a6d3b', armor:'#b08a3a', hairStyle:'helmet'},
  hanh:    {name:'Cô Hạnh', def:'hanh', skin:'#d7a37c', hair:'#6f6a66', body:'#6b8f71', hairStyle:'bun'},
  diba:    {name:'Dì Ba', def:'diba', skin:'#dcab84', hair:'#20181a', body:'#a05a7a', hairStyle:'bun'},
  giay:    {name:'Đôi giày', def:'giay', shoe:1},
  kimquy:  {name:'Kim Quy', def:'kimquy_mo', turtle:1},
};
const dn = k => (CHARS[k]?.alias && !S?.intro?.has(k)) ? CHARS[k].alias : CHARS[k]?.name;
const NAME2KEY = Object.fromEntries(Object.entries(CHARS).map(([k,c])=>[c.name,k]));
const PREFIX2KEY = {na_:'na',phuc_:'phuc',nguyet_:'nguyet',theo_:'theo',nikanor_:'nikanor',rufus_:'rufus',lysandros_:'lys',myrto_:'myrto',dorion_:'dorion',be_:'be',ga_:'ga',kimquy_:'kimquy'};
const keyFromPortrait = id => { for (const p in PREFIX2KEY) if (id.startsWith(p)) return PREFIX2KEY[p]; return null; };

const PROFILES = {
  theo:'Học trò của Aristotle, người dựng ngôi đền các nàng Muse ở Athens. Đã hứa giữ chỗ cho tượng thầy mình, nên cần ba đứa đi lật lại những lời dối để các nàng trở về.',
  be:'Cậu bé đầy tớ trông đồng hồ nước trước cổng. Đêm qua chạy ra bến tây xem lửa như mọi người.',
  nikanor:'Thủ quỹ của Mouseion, giữ toàn bộ sổ sách. Nói rằng đêm qua ở lại thư viện và thấy tất cả.',
  ga:'Gã làm công áo nâu, hay đứng sẵn cạnh người lạ để chỉ đường ra dãy kho.',
  rufus:'Đội trưởng La Mã. Ra lệnh đốt thuyền và tự nhận. Bàn tay trái thiếu một đốt ngón út. Lính của ông canh cả hai bến.',
  lys:'Thầy dạy chữ già, ngồi dưới hiên cột ôm một cái hộp gỗ. Ông nội là học trò của Aristarchus.',
  myrto:'Cháu gái Lysandros, chép sách thuê cho thư viện. Ngón tay đen mực tới tận kẽ móng.',
  dorion:'Tư tế đứng đầu Mouseion, giữ Pinakes. Người duy nhất ở đây được triệu tập một phiên đối chất.',
};

/* ---------- Vật chứng & ghi chú ---------- */
const EVIDENCE = {
  e_hanh_lang:{t:'Hành lang không có khói', d:'Đường vào phòng đọc mát và sạch. Nikanor bảo khói độc tràn sang cả đêm.', img:'items/item_chen_tra.png', k:'Hl'},
  e_kho:{t:'Sức chứa dãy kho', d:'Sáu kho, mỗi kho chừng năm nghìn cuộn. Cả dãy chỉ khoảng ba mươi nghìn.', img:'items/item_cuon_chay.png', k:'Kh'},
  e_ke:{t:'Mười bảy ô kệ trống', d:'Bụi xám không lẫn tro. Ba ô trống từ hôm qua, mười bốn ô trống từ nhiều tháng trước.', img:'items/item_bang_sap.png', k:'Kệ'},
  e_pin:{t:'Đối chiếu Pinakes', d:'Mười bảy ô trống ứng với mười bảy bản quý nhất có đánh dấu sao trong danh mục.', img:'items/item_pinakes.png', k:'Pi'},
  e_day:{t:'Dây niên đại', d:'Đám cháy chỉ là một cái kẹp ở cuối dây. Trước nó là gần trăm năm thư viện không còn người giữ, sách bị đếm bớt dần.', img:'items/item_day_gai.png', k:'Dâ'},
  e_myrto:{t:'Lời kể của Myrto', d:'Ba năm nay, rương sách đi ra bến phía đông vào ban đêm. Sổ thủ quỹ ghi là đã hủy. Đêm qua đi nhiều nhất.', img:'items/item_cuon_sach.png', k:'My'},
  e_rufus:{t:'Lời khai của Rufus', d:'Đêm qua lính La Mã thấy người khiêng rương xuống thuyền ở bến đông, có giấy phép dấu Mouseion. Rufus sẽ nói lại trước tư tế.', img:'items/item_giay_phep.png', k:'Ru'},
  e_ruong:{t:'Những chiếc rương ở bến đông', d:'Rương gỗ chốt đồng, sạch, không một vệt khói, niêm dấu con cú của Mouseion.', img:'items/item_ruong.png', k:'Rư'},
  e_hop:{t:'Chú giải của Aristarchus', d:'Bản duy nhất còn lại trong thành, nguyên vẹn. Myrto mang ra khỏi thư viện từ tháng trước.', img:'items/item_hop_go.png', k:'Hộ'},
};
const NOTES = {
  n_dan:['Lời dặn của Theophrastus','Tới Alexandria, năm 48 trước Công nguyên. Cả thành nói thư viện đã cháy rụi, và Clio mờ đi đúng đêm người ta bắt đầu nói câu ấy. Đi khắp thành, nhìn tận mắt, hỏi chuyện, đo đếm, ghi vào sổ. Khi mặt trời lặn, viết tên kẻ dắt mũi cả thành lên mai rùa, chỉ một lần. Viết đúng rồi thì còn phải đưa bằng chứng cho người có quyền xét xử ở đó.'],
  n_dien_van:['Lời Nikanor trên bậc thềm','Lửa của Caesar đốt sạch thư viện. Bốn trăm nghìn cuộn cháy trong một đêm. Ông ta nói ông ta thấy tất cả.'],
  n_luat:['Luật của thành','Ngoại kiều không được buộc tội ai. Chỉ tư tế đứng đầu Mouseion mới được triệu tập đối chất.'],
  n_lys:['Lời Lysandros','Chừng trăm năm trước, nhà vua đuổi học giả, người giữ thư viện bỏ chạy. Từ đó không ai đọc sách nữa, chỉ có người đếm. "Và có người đếm bớt đi."'],
  n_co_gai:['Cô gái ôm giỏ mây','Đầu ngón tay đen mực. Ôm giỏ giấy cói không cháy, không ám khói, đi ra từ cổng phụ Mouseion.'],
};

/* ---------- Địa điểm ---------- */
const LOCS = {
  cong:{name:'Cổng Mouseion', bg:'cong', pin:[441,392], spots:[
    {k:'cong_be', l:'Cậu bé ở đồng hồ nước', x:78, y:52},
    {k:'cong_nik', l:'Nikanor', x:50, y:34},
    {k:'cong_ga', l:'Gã áo nâu', x:24, y:56},
    {k:'cong_dam_dong', l:'Đám đông', x:40, y:66},
    {k:'cong_to', l:'Bậc thềm', x:58, y:52, show:()=> (v('co_e_ke')||v('co_e_kho')||v('co_e_hanh_lang')||v('co_e_myrto')) && !v('biet_luat')},
  ]},
  hien_cot:{name:'Hiên cột', bg:'hien_cot', pin:[505,246], spots:[
    {k:'hien_lys', l:'Ông lão ôm hộp gỗ', x:30, y:62, label:()=> S.intro.has('lys') ? 'Lysandros' : 'Ông lão ôm hộp gỗ'},
    {k:'hien_hanh_lang', l:'Lối vào hành lang', x:76, y:42},
  ]},
  phong_doc:{name:'Phòng đọc', bg:'phong_doc', pin:[668,196], arrive:'doc_vao', unlock:'_doc', spots:[
    {k:'doc_ke', l:'Dãy kệ', x:30, y:46},
    {k:'doc_cua_so', l:'Bàn đọc dưới cửa sổ', x:66, y:62},
  ]},
  day_kho:{name:'Dãy kho bến tây', bg:'day_kho', pin:[222,300], arrive:'kho_vao', spots:[
    {k:'kho_trong', l:'Cửa kho thứ nhất', x:30, y:55},
  ]},
  trai:{name:'Trại La Mã', bg:'trai', pin:[232,170], spots:[
    {k:'trai_rufus', l:'Viên đội trưởng', x:52, y:50, label:()=> S.intro.has('rufus') ? 'Rufus' : 'Viên đội trưởng'},
    {k:'trai_hang_rao', l:'Hàng rào cọc gỗ', x:22, y:66},
  ]},
  phong_dorion:{name:'Phòng tư tế', bg:'phong_dorion', pin:[690,318], spots:[
    {k:'dorion_noi', l:'Vị tư tế', x:38, y:50, label:()=> S.intro.has('dorion') ? 'Dorion' : 'Vị tư tế'},
  ]},
  san_trong:{name:'Sân trong', bg:'san_trong', pin:[560,300], spots:[
    {k:'san_ho', l:'Hồ nước vuông', x:50, y:66},
    {k:'san_cho', l:'Ngồi chờ hoàng hôn', x:82, y:58},
  ]},
  nha_lys:{name:'Nhà Lysandros', bg:'nha_lys', pin:[825,488], unlock:'mo_nha_lys', spots:[
    {k:'myrto_noi', l:'Cô gái giữa chồng giấy', x:42, y:52, label:()=> S.intro.has('myrto') ? 'Myrto' : 'Cô gái giữa chồng giấy'},
    {k:'myrto_giay', l:'Chồng giấy cói', x:74, y:66},
  ]},
  ben_dong:{name:'Bến phía đông', bg:'ben_dong_ngay', pin:[868,168], unlock:'mo_ben_dong', spots:[
    {k:'ben_dong_ruong', l:'Chồng rương dưới tấm bạt', x:56, y:62},
  ]},
};

/* ---------- Đối chất ---------- */
const CLAIMS = [
  {q:'Lửa của Caesar đã đốt sạch thư viện. Tôi ở đây cả đêm. Tôi thấy tất cả.', ok:['e_ke','e_hanh_lang'],
   win:{e_ke:'Dorion: Lửa ở bến tây lấy được những cuộn sách nằm sâu trong phòng đọc, mà không để lại một hạt tro trên kệ sao?', e_hanh_lang:'Dorion: Nếu khói độc tràn sang cả đêm, sao hành lang vào phòng đọc vẫn sạch như chưa từng có lửa?'},
   back:'Nikanor: Khói, tro, kệ sách... Cô bé à, đêm qua cô có ở đây đâu.'},
  {q:'Bốn trăm nghìn cuộn. Sổ của tôi ghi rõ từng cuộn một.', ok:['e_kho'],
   win:{e_kho:'Dorion: Sáu nhà kho sát cảng chứa nổi chừng ba mươi nghìn cuộn. Ba trăm bảy mươi nghìn cuộn còn lại đã cháy ở đâu?'},
   back:'Nikanor: Sổ sách là việc của tôi. Các vị lấy gì mà đếm thay tôi?'},
  {q:'Những cuộn mất trong sổ là do mối mọt, do ẩm. Tôi đã cho hủy, đúng phép.', ok:['e_pin'],
   win:{e_pin:'Dorion: Mối mọt nào chỉ ăn đúng mười bảy cuốn quý nhất trong Pinakes, và ăn sạch tới mức không chừa một mẩu vụn?'},
   back:'Nikanor: Mối mọt thì ai mà ngăn được, thưa ngài.'},
  {q:()=> v('co_e_myrto') ? 'Một đứa chép sách thuê thì biết gì. Lời nó nói đáng bao nhiêu?' : 'Đêm qua cả thành chạy ra bến tây. Không ai thấy gì khác ngoài lửa.', ok:['e_rufus','e_ruong'],
   win:{e_rufus:'Rufus: Lính tôi thấy người khiêng rương xuống thuyền ở bến đông, giấy phép mang dấu Mouseion. Tôi đã đốt thuyền, tôi nhận. Nhưng tôi không nhận phần của người khác.', e_ruong:'Dorion: Những chiếc rương ở bến đông mang dấu con cú của chính nhà này. Và không chiếc nào ám khói.'},
   back:'Nikanor: Thưa ngài, ngài định xử thủ quỹ của mình bằng lời đồn ngoài bến sao?'},
  {q:'Thư viện vẫn vững vàng cho tới đêm qua. Chỉ một đêm, mà mất hết.', ok:['e_day'],
   win:{e_day:'Dorion: Phần lớn sợi dây này không dính gì tới lửa. Thư viện mất sách từng cuộn một, suốt gần trăm năm.'},
   back:'Nikanor: Chuyện trăm năm trước thì liên quan gì tới đêm qua?'},
];

const FAIL_CLUES = {
  rufus:'Lúc Rufus bị giải đi, ngoài bến phía đông có một con thuyền nhổ neo. Trong khoang toàn rương gỗ, và không chiếc nào ám khói.',
  myrto:'Người ta mở giỏ của Myrto ra giữa sân. Sách trong đó sạch, khô, không một vết cháy. Sách chưa từng cháy thì biến mất vì cái gì?',
  dorion:'Người giữ đền không phải người đứng trên bậc thềm nói về lửa. Ai là người nói nhiều nhất, và ai được lợi khi cả thành tin lời ấy?',
  ga:'Gã áo nâu chỉ là người được trả vài đồng để chỉ đường. Ai trả tiền cho gã, và vì sao lại muốn mọi người nhìn vào đống tro?',
  khong_doi_chat:'Cái tên đã đúng. Nhưng chỉ tư tế Dorion được triệu tập đối chất, và ông chưa có lý do gì để tin ba người khách lạ.',
  thieu_chung:'',
};

/* ---------- Trạng thái ---------- */
let story, S, D = {post:[], after:null, typing:false, full:'', tmr:null, ff:false, choices:false};
const SEEN_KEY = 'alex_seen_v1';
let SEEN = new Set();
try { SEEN = new Set(JSON.parse(localStorage.getItem(SEEN_KEY) || '[]')); } catch(e) {}
const saveSeen = () => { try { localStorage.setItem(SEEN_KEY, JSON.stringify([...SEEN].slice(-3000))); } catch(e) {} };

function freshState(keep){
  return {
    clock: TOTAL_DROPS, loc:null, ev:[], notes:[], met:new Set(), used:new Set(), visited:new Set(),
    expr:{}, hist: keep?.hist || [], log:[], lessons: keep?.lessons || [], unbroken:[], inCity:false, turtle:false,
    keCodes:[], keMarks:{}, newNote:false, intro: keep?.intro || new Set(),
  };
}
const v = n => story.variablesState[n];
const setv = (n,x) => { story.variablesState[n] = x; };
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* =========================================================
   VẼ TẠM: cảnh nền (SVG 1600×900)
   ========================================================= */
const INK = '#1d2742';
const P = {
  sky1:'#7fc6e4', sky2:'#f6e2b4', stone:'#efe3c8', stone2:'#d8c9a8', shade:'#2a3a5c', sea:'#2f8f8a', sea2:'#1f6f7a',
  terra:'#c4572e', olive:'#7d8a4a', gold:'#d9a441', wood:'#7a4f2a', wood2:'#5b3a1e', soot:'#2b2722',
};
const svgWrap = (inner, defs='') => `<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs>
<linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${P.sky1}"/><stop offset="1" stop-color="${P.sky2}"/></linearGradient>
<linearGradient id="gSea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${P.sea}"/><stop offset="1" stop-color="${P.sea2}"/></linearGradient>
<linearGradient id="gDusk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b2f6b"/><stop offset=".6" stop-color="#b0567a"/><stop offset="1" stop-color="#f0a35e"/></linearGradient>
<linearGradient id="gSunset" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f08a4b"/><stop offset="1" stop-color="#f7d08a"/></linearGradient>
<linearGradient id="gNight" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1530"/><stop offset="1" stop-color="#2a3560"/></linearGradient>
<linearGradient id="gBeam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff6d8" stop-opacity=".55"/><stop offset="1" stop-color="#fff6d8" stop-opacity="0"/></linearGradient>
<radialGradient id="gTorch"><stop offset="0" stop-color="#ffcf6a" stop-opacity=".8"/><stop offset="1" stop-color="#ffcf6a" stop-opacity="0"/></radialGradient>
<filter id="fBlur"><feGaussianBlur stdDeviation="6"/></filter>${defs}</defs>${inner}</svg>`;
const col = (x, yt, yb, w=56, c=P.stone) => `<g stroke="${INK}" stroke-width="5"><rect x="${x-w/2}" y="${yt+22}" width="${w}" height="${yb-yt-40}" fill="${c}"/><rect x="${x+2}" y="${yt+22}" width="${w/2-2}" height="${yb-yt-40}" fill="${P.shade}" opacity=".28" stroke="none"/><rect x="${x-w/2-10}" y="${yt}" width="${w+20}" height="24" fill="${c}"/><rect x="${x-w/2-8}" y="${yb-20}" width="${w+16}" height="20" fill="${P.stone2}"/></g>`;
const fallen = (x,y,l=260) => `<g stroke="${INK}" stroke-width="5"><rect x="${x}" y="${y}" width="${l}" height="52" rx="8" fill="${P.stone}"/><rect x="${x}" y="${y+28}" width="${l}" height="24" fill="${P.shade}" opacity=".25" stroke="none"/><ellipse cx="${x+l}" cy="${y+26}" rx="14" ry="26" fill="${P.stone2}"/></g>`;
const smoke = (x,y,s=1) => `<g fill="#6d6a6a" opacity=".55">${[0,1,2,3].map(i=>`<circle cx="${x+i*14*s}" cy="${y-i*60*s}" r="${(30+i*14)*s}"/>`).join('')}</g>`;
const sea = (y, fill='url(#gSea)') => `<rect x="0" y="${y}" width="1600" height="${900-y}" fill="${fill}"/>${[0,1,2,3].map(i=>`<path d="M${60+i*380} ${y+40+i*28} q40 -14 80 0 t80 0" stroke="#bfe6df" stroke-width="4" fill="none" opacity=".6"/>`).join('')}`;
const scrollEnds = (x,y,w,h,n=4,m=3,empty=false) => { if(empty) return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#20150b"/>`; let s=`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#2c1d10"/>`; const r=Math.min(w/n,h/m)/2.4; for(let i=0;i<n;i++)for(let j=0;j<m;j++) s+=`<circle cx="${x+w/n*(i+.5)}" cy="${y+h/m*(j+.5)}" r="${r}" fill="#efe2c2" stroke="${INK}" stroke-width="2"/>`; return s; };
const shelfWall = (x,y,w,h,cols,rows,emptyEvery=0) => { let s=`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${P.wood}" stroke="${INK}" stroke-width="5"/>`; const cw=w/cols, rh=h/rows; for(let i=0;i<cols;i++)for(let j=0;j<rows;j++){ const e = emptyEvery && ((i*7+j*3)%emptyEvery===0); s+=scrollEnds(x+i*cw+5,y+j*rh+5,cw-10,rh-10,3,2,e);} return s; };
const tent = (x,y,w,h,c=P.terra) => `<path d="M${x} ${y+h} L${x+w/2} ${y} L${x+w} ${y+h} Z" fill="${c}" stroke="${INK}" stroke-width="5"/><path d="M${x+w/2} ${y} L${x+w} ${y+h} L${x+w*.62} ${y+h} Z" fill="${P.shade}" opacity=".3"/><path d="M${x+w/2-24} ${y+h} L${x+w/2} ${y+h*.55} L${x+w/2+24} ${y+h} Z" fill="#3a1b12"/>`;
const wh = (x,y,w,h) => `<g stroke="${INK}" stroke-width="5"><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#bfae8f"/><rect x="${x}" y="${y}" width="${w}" height="${h*.55}" fill="${P.soot}" opacity=".55" stroke="none"/><path d="M${x-6} ${y} L${x+w*.3} ${y-28} L${x+w*.55} ${y+16} L${x+w+6} ${y-10}" fill="none"/><rect x="${x+w*.32}" y="${y+h*.45}" width="${w*.36}" height="${h*.55}" fill="#120e0b"/></g>`;
const pool = (x,y,w,h,fill='#4aa3a0') => `<rect x="${x-14}" y="${y-14}" width="${w+28}" height="${h+28}" fill="${P.stone2}" stroke="${INK}" stroke-width="5"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${INK}" stroke-width="4"/><path d="M${x+40} ${y+h*.4} h${w*.3} M${x+w*.5} ${y+h*.7} h${w*.3}" stroke="#ffffff" stroke-width="4" opacity=".35"/>`;
const ship = (x,y,chests=true) => `<g stroke="${INK}" stroke-width="5"><path d="M${x} ${y} L${x+520} ${y} L${x+460} ${y+90} L${x+50} ${y+90} Z" fill="${P.wood}"/><rect x="${x+250}" y="${y-300}" width="14" height="300" fill="${P.wood2}"/><path d="M${x+264} ${y-280} L${x+430} ${y-40} L${x+264} ${y-40} Z" fill="#e8dcc0"/>${chests?[0,1,2,3,4].map(i=>`<rect x="${x+60+i*70}" y="${y-48}" width="60" height="46" fill="#8a5a2c"/><rect x="${x+84+i*70}" y="${y-30}" width="12" height="10" fill="${P.gold}"/>`).join(''):''}</g>`;
const beam = (x,y,w,l) => `<path d="M${x} ${y} L${x+w} ${y} L${x+w+l*.5} ${y+l} L${x+l*.5} ${y+l} Z" fill="url(#gBeam)"/>`;
const room = (wall='#d9c7a3', floor='#b79c72') => `<rect width="1600" height="900" fill="${wall}"/><rect y="660" width="1600" height="240" fill="${floor}"/><path d="M0 660 H1600" stroke="${INK}" stroke-width="5"/>`;
const torch = (x,y) => `<circle cx="${x}" cy="${y}" r="140" fill="url(#gTorch)"/><rect x="${x-6}" y="${y}" width="12" height="200" fill="${P.wood2}" stroke="${INK}" stroke-width="4"/><path d="M${x} ${y-40} q22 24 0 44 q-22 -20 0 -44" fill="#ffb347" stroke="${INK}" stroke-width="3"/>`;

const SCENES = {
  den: () => svgWrap(`<rect width="1600" height="900" fill="url(#gSky)"/><rect y="640" width="1600" height="260" fill="#9db35e"/><rect y="640" width="1600" height="30" fill="#7f9a46"/>
    <rect x="160" y="80" width="1300" height="40" fill="${P.stone}" stroke="${INK}" stroke-width="5"/><path d="M900 80 L1460 80 L1460 120 L1000 120 Z" fill="#9db35e" opacity=".0"/>
    ${[200,420,1180,1400].map(x=>col(x,110,660,70)).join('')}${col(640,330,660,70)}${fallen(820,600,300)}${fallen(1180,640,200)}
    ${[0,1,2,3,4,5,6,7,8].map(i=>{const a=Math.PI*(0.15+0.7*i/8); const x=800-Math.cos(a)*420, y=600-Math.sin(a)*110; return `<rect x="${x-34}" y="${y-70}" width="68" height="90" fill="${P.stone}" stroke="${INK}" stroke-width="5"/><rect x="${x}" y="${y-70}" width="34" height="90" fill="${P.shade}" opacity=".25"/>${i===0?`<rect x="${x-16}" y="${y-40}" width="32" height="18" fill="none" stroke="${INK}" stroke-width="3"/>`:''}`}).join('')}
    <rect x="770" y="560" width="60" height="62" fill="${P.stone2}" stroke="${INK}" stroke-width="5"/>`),
  ben_tay: () => svgWrap(`<rect width="1600" height="900" fill="url(#gSky)"/><rect width="1600" height="900" fill="#b9a68a" opacity=".25"/>
    <rect x="700" y="300" width="760" height="120" fill="${P.stone}" stroke="${INK}" stroke-width="5"/>${[760,860,960,1060,1160,1260,1360].map(x=>`<rect x="${x}" y="320" width="22" height="100" fill="${P.stone2}" stroke="${INK}" stroke-width="3"/>`).join('')}<rect x="700" y="290" width="760" height="22" fill="${P.stone}" stroke="${INK}" stroke-width="5"/><rect x="700" y="290" width="180" height="130" fill="${P.soot}" opacity=".6"/>
    ${sea(420)}${[120,520].map(x=>`<g stroke="${INK}" stroke-width="6" fill="none"><path d="M${x} 560 q120 60 260 0"/>${[0,1,2,3,4,5].map(i=>`<path d="M${x+30+i*40} ${574+Math.abs(i-2.5)*4} v-70"/>`).join('')}</g>`).join('')}
    ${smoke(330,500,1)}${smoke(980,430,.8)}<rect y="740" width="1600" height="160" fill="${P.stone2}" stroke="${INK}" stroke-width="5"/>${[0,1,2,3,4,5,6,7].map(i=>`<path d="M${i*200} 740 v160" stroke="${INK}" stroke-width="3"/>`).join('')}`),
  cong: () => svgWrap(`<rect width="1600" height="900" fill="url(#gSky)"/><rect x="250" y="120" width="1100" height="60" fill="${P.stone}" stroke="${INK}" stroke-width="5"/><path d="M230 120 L800 30 L1370 120 Z" fill="${P.stone}" stroke="${INK}" stroke-width="5"/>
    ${[320,460,600,1000,1140,1280].map(x=>col(x,170,560,64)).join('')}<rect x="700" y="180" width="200" height="380" fill="#3a2a1a" stroke="${INK}" stroke-width="5"/>
    ${[0,1,2,3,4].map(i=>`<rect x="${200-i*40}" y="${560+i*36}" width="${1200+i*80}" height="36" fill="${i%2?P.stone2:P.stone}" stroke="${INK}" stroke-width="4"/>`).join('')}<rect y="740" width="1600" height="160" fill="#cdbb95"/>
    <g stroke="${INK}" stroke-width="5"><rect x="1236" y="360" width="12" height="360" fill="#8c5a2b"/>${[0,1,2].map(i=>`<path d="M${1190} ${400+i*110} h104 l-14 46 h-76 Z" fill="#b8792f"/>`).join('')}</g>`),
  hien_cot: () => svgWrap(`<rect width="1600" height="900" fill="#e6d6b3"/><rect x="760" y="0" width="840" height="680" fill="url(#gSky)"/><rect x="760" y="500" width="840" height="180" fill="#9db35e"/>${[880,1080,1300,1480].map(x=>`<circle cx="${x}" cy="480" r="70" fill="${P.olive}" stroke="${INK}" stroke-width="5"/><rect x="${x-8}" y="500" width="16" height="70" fill="${P.wood2}"/>`).join('')}
    ${[80,330,580,830].map((x,i)=>col(x,40,700,90)).join('')}${[0,1,2,3].map(i=>`<path d="M${130+i*250} 700 L${330+i*250} 700 L${520+i*250} 900 L${300+i*250} 900 Z" fill="${P.shade}" opacity=".25"/>`).join('')}
    <rect y="680" width="1600" height="220" fill="${P.stone2}"/><rect x="0" y="640" width="700" height="44" fill="${P.stone}" stroke="${INK}" stroke-width="4"/><rect x="1150" y="200" width="180" height="300" fill="#2a2018" stroke="${INK}" stroke-width="5"/>`),
  phong_doc: () => svgWrap(`${room('#cdb68c','#8d6c45')}${shelfWall(60,90,700,560,7,6)}${shelfWall(840,90,700,560,7,6,0)}
    ${beam(300,0,70,820)}${beam(900,0,60,820)}${beam(1260,0,50,760)}<rect x="560" y="700" width="480" height="40" fill="${P.wood}" stroke="${INK}" stroke-width="5"/>`),
  phong_nikanor: () => svgWrap(`${room('#e2cfa6','#a88b62')}<rect x="980" y="120" width="420" height="340" fill="url(#gSky)" stroke="${INK}" stroke-width="6"/>${beam(980,120,420,500)}
    <rect x="260" y="560" width="900" height="40" fill="${P.wood}" stroke="${INK}" stroke-width="5"/>${[0,1,2].map(i=>`<rect x="${320+i*90}" y="${470-i*0}" width="70" height="90" fill="#7a3f22" stroke="${INK}" stroke-width="4"/>`).join('')}
    <g stroke="${INK}" stroke-width="4"><path d="M720 560 v-120 M650 440 h140" fill="none"/><path d="M640 440 l-20 50 h60 Z M780 440 l-20 50 h60 Z" fill="${P.gold}"/><ellipse cx="960" cy="530" rx="50" ry="36" fill="${P.terra}"/>${smoke(960,470,.35)}</g>`),
  day_kho: () => svgWrap(`<rect width="1600" height="900" fill="url(#gSky)"/><rect width="1600" height="900" fill="#8f7d66" opacity=".35"/>${[0,1,2,3,4,5].map(i=>wh(40+i*225,330,200,300)).join('')}${[0,2,4].map(i=>smoke(140+i*225,300,.9)).join('')}
    <rect y="630" width="1600" height="270" fill="#bba98a"/><rect x="1400" y="240" width="200" height="420" fill="${P.stone}" stroke="${INK}" stroke-width="5"/><rect x="1440" y="420" width="90" height="240" fill="#2a1e14" stroke="${INK}" stroke-width="4"/>`),
  trong_kho: () => svgWrap(`<rect width="1600" height="900" fill="#1a1410"/>${beam(380,0,80,700)}${beam(1000,0,60,760)}${shelfWall(120,160,1360,420,10,5)}<rect y="580" width="1600" height="320" fill="#2b221a"/>${[0,1,2,3,4].map(i=>`<ellipse cx="${200+i*300}" cy="700" rx="140" ry="40" fill="#3d332b" stroke="${INK}" stroke-width="4"/>`).join('')}`),
  trai: () => svgWrap(`<rect width="1600" height="900" fill="url(#gSky)"/>${sea(300)}<rect y="470" width="1600" height="430" fill="#e3cf9f"/>${tent(160,300,300,200)}${tent(520,320,260,180)}${tent(1180,300,300,200)}
    ${[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(i=>`<path d="M${40+i*110} 690 v-150 l14 -24 l14 24 v150 Z" fill="${P.wood}" stroke="${INK}" stroke-width="4"/>`).join('')}<rect y="610" width="1600" height="18" fill="${P.wood2}"/>${smoke(900,500,.6)}`),
  phong_dorion: () => svgWrap(`${room('#dcc9a2','#9c8058')}<rect x="80" y="120" width="420" height="520" fill="${P.wood}" stroke="${INK}" stroke-width="5"/>${[0,1,2,3,4,5,6].map(j=>[0,1,2,3,4].map(i=>`<circle cx="${130+i*80}" cy="${170+j*70}" r="26" fill="#efe2c2" stroke="${INK}" stroke-width="3"/>`).join('')).join('')}
    <rect x="1180" y="160" width="300" height="480" fill="#c7d7c7" stroke="${INK}" stroke-width="5"/>${pool(1220,480,220,90)}<rect x="560" y="200" width="560" height="300" fill="#e6d6b3" stroke="${INK}" stroke-width="3" stroke-dasharray="10 10"/><rect x="560" y="600" width="520" height="40" fill="${P.wood}" stroke="${INK}" stroke-width="5"/>`),
  nha_lys: () => svgWrap(`${room('#c9b08a','#8a6a48')}<rect x="1180" y="140" width="200" height="160" fill="url(#gSky)" stroke="${INK}" stroke-width="5"/>${beam(1180,140,200,560)}
    ${[0,1,2,3,4,5,6,7,8,9].map(i=>`<rect x="${80+i*150}" y="${560-(i%3)*40}" width="120" height="${120+(i%3)*40}" fill="#efe2c2" stroke="${INK}" stroke-width="4"/><path d="M${80+i*150} ${590-(i%3)*40} h120 M${80+i*150} ${620-(i%3)*40} h120" stroke="${INK}" stroke-width="2"/>`).join('')}`),
  ben_dong_ngay: () => svgWrap(`<rect width="1600" height="900" fill="url(#gSky)"/>${sea(380)}${ship(520,520)}<rect y="680" width="1600" height="220" fill="${P.stone2}" stroke="${INK}" stroke-width="5"/>
    <g stroke="${INK}" stroke-width="5">${[0,1,2,3].map(i=>`<rect x="${700+i*90}" y="${640-(i%2)*50}" width="80" height="60" fill="#8a5a2c"/>`).join('')}<path d="M660 600 Q860 520 1060 600 L1060 700 L660 700 Z" fill="#c4b48e" opacity=".9"/></g>`),
  ben_dong: () => svgWrap(`<rect width="1600" height="900" fill="url(#gDusk)"/>${sea(420,'#2c3f6b')}${ship(520,560)}<rect y="700" width="1600" height="200" fill="#6b6280" stroke="${INK}" stroke-width="5"/>${[300,1300].map(x=>`<circle cx="${x}" cy="640" r="60" fill="url(#gTorch)"/><rect x="${x-10}" y="630" width="20" height="26" fill="#ffcf6a" stroke="${INK}" stroke-width="3"/>`).join('')}`),
  san_trong: () => svgWrap(`<rect width="1600" height="900" fill="url(#gSunset)"/>${[80,280,1320,1520].map(x=>col(x,60,620,64,'#f0d9b4')).join('')}<rect y="600" width="1600" height="300" fill="#f0dfbf"/>${pool(560,640,480,170,'#e79a5c')}
    <rect x="0" y="40" width="1600" height="30" fill="#f0d9b4" stroke="${INK}" stroke-width="5"/>${[520,1080].map(x=>`<circle cx="${x}" cy="470" r="80" fill="${P.olive}" stroke="${INK}" stroke-width="5"/><rect x="${x-8}" y="500" width="16" height="100" fill="${P.wood2}"/>`).join('')}`),
  san_dem: () => svgWrap(`<rect width="1600" height="900" fill="url(#gNight)"/>${[80,280,1320,1520].map(x=>col(x,60,620,64,'#8f8aa6')).join('')}<rect y="600" width="1600" height="300" fill="#5d5874"/>${pool(560,640,480,170,'#2b3c6b')}${[440,1160,200,1400].map(x=>torch(x,520)).join('')}`),
  phong_na: () => svgWrap(`${room('#c8c4bb','#9b958a')}<rect x="1060" y="140" width="380" height="300" fill="#a9b3ba" stroke="${INK}" stroke-width="6"/><rect x="120" y="520" width="700" height="140" fill="#dfe3e6" stroke="${INK}" stroke-width="5"/><rect x="900" y="300" width="120" height="360" fill="${P.wood}" stroke="${INK}" stroke-width="5"/>`),
  ban_an: () => svgWrap(`${room('#e8d7b4','#b99c74')}<rect x="200" y="520" width="1200" height="60" fill="${P.wood}" stroke="${INK}" stroke-width="5"/>${[360,620,880,1140].map(x=>`<ellipse cx="${x}" cy="510" rx="60" ry="18" fill="#f4efe4" stroke="${INK}" stroke-width="3"/>`).join('')}<rect x="1380" y="380" width="120" height="200" fill="none" stroke="${INK}" stroke-width="6"/><rect x="1380" y="470" width="120" height="20" fill="${P.wood2}"/>`),
  cong_vien: () => svgWrap(`<rect width="1600" height="900" fill="#aeb6bf"/>${[200,460,1200].map(x=>`<rect x="${x}" y="140" width="120" height="380" fill="#8a929c" stroke="${INK}" stroke-width="4"/>`).join('')}<rect y="520" width="1600" height="380" fill="#7f9a6b"/><path d="M0 760 Q800 640 1600 760" stroke="#c9c2b4" stroke-width="80" fill="none"/>${[300,900,1400].map(x=>`<rect x="${x}" y="360" width="8" height="200" fill="${INK}"/><circle cx="${x+4}" cy="356" r="16" fill="#ffe7a0"/>`).join('')}`),
  san_bong_ro: () => svgWrap(`<rect width="1600" height="900" fill="#f1d9a6"/><rect y="0" width="1600" height="300" fill="#e8c48a"/><rect y="460" width="1600" height="440" fill="#b9b0a2"/>${[220,1380].map(x=>`<rect x="${x-8}" y="200" width="16" height="400" fill="${INK}"/><rect x="${x-70}" y="180" width="140" height="90" fill="#f4efe4" stroke="${INK}" stroke-width="5"/>`).join('')}<path d="M220 420 Q800 470 1380 420" stroke="${P.wood}" stroke-width="6" fill="none"/>`),
  bep: () => svgWrap(`${room('#efd9a7','#b98f5c')}<rect x="120" y="420" width="500" height="240" fill="#8e9aa3" stroke="${INK}" stroke-width="5"/><ellipse cx="370" cy="400" rx="140" ry="40" fill="#5b6a73" stroke="${INK}" stroke-width="5"/>${smoke(370,360,.6)}<rect x="900" y="560" width="440" height="34" fill="${P.wood}" stroke="${INK}" stroke-width="5"/><ellipse cx="1120" cy="550" rx="80" ry="22" fill="#f4efe4" stroke="${INK}" stroke-width="3"/>`),
};
function setBg(id){
  const el = $('#bg'); const img = asset('bg/'+id+'.png');
  el.classList.add('fade');
  setTimeout(()=>{ el.innerHTML = img ? `<img src="${img}" alt="">` : (SCENES[id]||SCENES.cong)(); el.classList.remove('fade'); }, 180);
  S.bg = id;
}

/* ---------- Chân dung tạm ---------- */
function portraitSVG(key, id){
  const c = CHARS[key]; if(!c) return '';
  const EXPR = {ngac:'ngơ ngác',quyet:'quyết tâm',gian:'giận',buon:'buồn',hieu:'vỡ lẽ',cuoi:'cười',thi_tham:'thì thầm',tu_choi:'từ chối',lo:'khó xử',lanh:'lạnh',dem:'đang đếm',mia:'mỉa mai',xin_loi:'xin lỗi',hien:'hiền',ba_ngon:'ba ngón tay',tram:'trầm ngâm',khung:'khựng lại',met:'mệt',khai:'khai',om_hop:'ôm hộp',giu:'giữ tay',chan:'chắn',ke:'kể',om:'ôm sách',dong:'khép lòng',nghe:'lắng nghe',phan:'tuyên án',mo:'mở mắt',nham:'nhắm mắt'};
  const label = id && id !== c.def ? (EXPR[id.replace(/^(na|phuc|nguyet|theo|nikanor|rufus|lysandros|myrto|dorion|kimquy)_/,'')] || '') : '';
  if (c.turtle) return `<svg viewBox="0 0 200 300"><ellipse cx="100" cy="250" rx="95" ry="45" fill="#d9a441" stroke="${INK}" stroke-width="5"/><path d="M40 245 q60 -40 120 0" stroke="${INK}" stroke-width="3" fill="none"/><ellipse cx="100" cy="170" rx="40" ry="36" fill="#9aa06a" stroke="${INK}" stroke-width="5"/><circle cx="86" cy="164" r="6" fill="#111"/><circle cx="114" cy="164" r="6" fill="#111"/></svg>`;
  if (c.shoe) return `<svg viewBox="0 0 200 300"><path d="M30 220 q0 -40 40 -50 l40 -40 q30 10 30 40 l40 20 q10 30 -10 40 h-130 q-10 0 -10 -10 Z" fill="#d7462f" stroke="${INK}" stroke-width="5"/><path d="M30 240 h160" stroke="#f3ead8" stroke-width="10"/></svg>`;
  const t = c.tall ? -14 : c.small ? 26 : 0;
  const hair = {
    messy:`<path d="M58 ${100+t} q-6 -60 42 -66 q52 -2 46 64 q-8 -18 -14 -24 q-10 18 -30 14 q-24 8 -44 12 Z" fill="${c.hair}"/><path d="M66 ${80+t} l-14 40 M138 ${84+t} l14 34" stroke="${c.hair}" stroke-width="8"/>`,
    short:`<path d="M60 ${96+t} q0 -56 40 -58 q44 0 42 58 q-8 -26 -42 -28 q-32 0 -40 28 Z" fill="${c.hair}"/>`,
    pony:`<path d="M58 ${100+t} q0 -62 42 -62 q44 0 42 62 q-10 -22 -42 -24 q-34 2 -42 24 Z" fill="${c.hair}"/><path d="M140 ${90+t} q24 30 10 80" stroke="${c.hair}" stroke-width="16" fill="none"/>`,
    bun:`<circle cx="100" cy="${34+t}" r="18" fill="${c.hair}"/><path d="M60 ${96+t} q0 -56 40 -56 q42 0 40 56 q-10 -20 -40 -22 q-30 2 -40 22 Z" fill="${c.hair}"/>`,
    old:`<path d="M62 ${92+t} q4 -40 38 -42 q36 2 38 42 q-14 -14 -38 -14 q-22 0 -38 14 Z" fill="${c.hair}"/>`,
    crop:`<path d="M62 ${88+t} q2 -44 38 -46 q38 2 38 46 q-12 -16 -38 -16 q-26 0 -38 16 Z" fill="${c.hair}"/>`,
    helmet:`<path d="M54 ${96+t} q0 -64 46 -64 q48 0 46 64 Z" fill="#b08a3a" stroke="${INK}" stroke-width="5"/>`,
  }[c.hairStyle] || '';
  return `<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 300 q4 -96 86 -104 q82 8 86 104 Z" fill="${c.body}" stroke="${INK}" stroke-width="5"/>
    <path d="M100 196 q60 6 80 104 h-80 Z" fill="${P.shade}" opacity=".28"/>
    ${c.trim?`<path d="M30 300 q8 -70 70 -84 M170 300 q-8 -70 -70 -84" stroke="${c.trim}" stroke-width="10" fill="none"/>`:''}
    ${c.armor?`<path d="M44 300 q10 -64 56 -70 q46 6 56 70 Z" fill="${c.armor}" stroke="${INK}" stroke-width="4" opacity=".95"/>`:''}
    <rect x="86" y="${150+t}" width="28" height="${52-t}" fill="${c.skin}" stroke="${INK}" stroke-width="4"/>
    <ellipse cx="100" cy="${100+t}" rx="40" ry="50" fill="${c.skin}" stroke="${INK}" stroke-width="5"/>
    <path d="M100 ${52+t} q40 4 40 48 q0 40 -40 50 Z" fill="${P.shade}" opacity=".18"/>
    ${c.beard?`<path d="M66 ${112+t} q34 70 68 0 q-10 24 -34 24 q-24 0 -34 -24 Z" fill="${c.beard}" stroke="${INK}" stroke-width="3"/>`:''}
    <circle cx="86" cy="${100+t}" r="4" fill="${INK}"/><circle cx="114" cy="${100+t}" r="4" fill="${INK}"/>
    ${hair}${c.ring?`<circle cx="150" cy="262" r="8" fill="${P.gold}" stroke="${INK}" stroke-width="3"/>`:''}
    ${label?`<rect x="20" y="268" width="160" height="24" rx="4" fill="#121a2bcc"/><text x="100" y="285" text-anchor="middle" font-size="14" fill="#f3ead8" font-family="Be Vietnam Pro, sans-serif">${esc(label)}</text>`:''}
  </svg>`;
}
function portraitHTML(key, id){
  id = id || CHARS[key]?.def;
  const img = id && asset('portraits/'+id+'.png');
  return img ? `<img src="${img}" alt="${esc(CHARS[key]?.name||'')}">` : portraitSVG(key, id);
}

/* =========================================================
   HUD: đồng hồ nước, tên địa điểm, nút
   ========================================================= */
function drawClock(){
  const r = S.clock;
  const lv = [Math.max(0,Math.min(6,r-10))/6, Math.max(0,Math.min(5,r-5))/5, Math.max(0,Math.min(5,r))/5];
  const bowl = (y,f) => `<path d="M8 ${y} h44 l-6 16 h-32 Z" fill="#2a3a5c" stroke="#d9a441" stroke-width="2"/>${f>0?`<path d="M${8+3*(1-f)} ${y+16-16*f} h${44-6*(1-f)} l-${6*f} ${16*f} h-${32+(1-f)*2} Z" fill="#5bb7c9"/>`:''}`;
  $('#clock').innerHTML = `<svg viewBox="0 0 60 80"><rect x="28" y="2" width="4" height="76" fill="#8c5a2b"/>${bowl(8,lv[0])}${bowl(34,lv[1])}${bowl(60,lv[2])}</svg><div><div class="n">${r}</div><div class="l">giọt nước còn lại</div></div>`;
  $('#clock').classList.toggle('low', r<=3);
}
function spend(n, why){
  if(!n || !S.inCity) return;
  S.clock = Math.max(0, S.clock - n);
  drawClock(); toast(`Đồng hồ nước nhỏ ${n} giọt${why? ' · '+why:''}`);
  logAct(`Tốn ${n} giọt${why? ': '+why:''}`);
}
function logAct(t){ S.log.push({t, c:S.clock}); }
let toastT;
function toast(t){ const el=$('#toast'); el.textContent=t; el.classList.add('on'); clearTimeout(toastT); toastT=setTimeout(()=>el.classList.remove('on'),2200); }
function markNew(){ S.newNote = true; $('#b-note').classList.add('new'); }

/* =========================================================
   KHÁM PHÁ
   ========================================================= */
function renderLoc(){
  const L = LOCS[S.loc]; if(!L) return;
  const vis = L.spots.filter(sp=>!sp.show || sp.show());
  const allSeen = vis.length>0 && vis.every(sp=>S.used.has(sp.k));
  const hint = allSeen ? 'Đã xem hết ở đây · bấm Bản đồ (M) để đi nơi khác'
             : !S.trav ? 'Bấm vào các vòng tròn để xem · bấm Bản đồ (M) để đi nơi khác' : '';
  $('#locname').innerHTML = esc(L.name) + (hint ? `<small class="lochint">${hint}</small>` : '');
  $('#b-map').classList.toggle('nudge', allSeen && S.inCity);
  const spots = $('#spots'); spots.innerHTML='';
  for(const sp of L.spots){
    if(sp.show && !sp.show()) continue;
    const b = document.createElement('button');
    b.className = 'spot' + (S.used.has(sp.k)?' seen':'');
    b.style.left = sp.x+'%'; b.style.top = sp.y+'%';
    b.innerHTML = `<span class="ring"></span><span class="lab">${esc(sp.label?sp.label():sp.l)}</span>`;
    b.onclick = () => { if(D.open) return; S.used.add(sp.k); runKnot(sp.k); };
    spots.appendChild(b);
  }
  $('#party').innerHTML = S.inCity ? ['phuc','nguyet'].map(k=>`<div class="av" title="${CHARS[k].name}">${portraitHTML(k, S.expr[k])}</div>`).join('') : '';
}
function travel(id, free){
  if(S.loc === id){ closeModal(); return; }
  if(!free && S.clock<=0){ closeModal(); toast('Nước đã cạn. Mặt trời đang lặn.'); checkSunset(); return; }
  closeModal();
  if(!free) spend(1, 'đi tới '+LOCS[id].name);
  if(!free) S.trav = (S.trav||0) + 1;
  S.loc = id; S.visited.add(id);
  if(free) logAct('Tới '+LOCS[id].name);
  setBg(LOCS[id].bg); renderLoc();
  if(LOCS[id].arrive) runKnot(LOCS[id].arrive);
  else checkSunset();
}
function checkSunset(){ if(S.inCity && !S.turtle && S.clock<=0 && !D.open) startTurtle(); }

/* =========================================================
   HỘI THOẠI
   ========================================================= */
function runKnot(k, after){
  story.ChoosePathString(k);
  D.post = []; D.after = after || null; D.open = true;
  $('#dlg').classList.add('on'); $('#spots').style.visibility='hidden';
  step();
}
function step(){
  if(story.canContinue){
    const raw = story.Continue(); const text = raw.trim(); const tags = story.currentTags.slice();
    const meta = handleTags(tags);
    if(!text) return step();
    return showLine(text, meta);
  }
  if(story.currentChoices.length) return showChoices();
  endDialog();
}
function handleTags(tags){
  const m = {p:null, advice:false};
  for(const t of tags){
    const [k, ...rest] = t.split(':'); const val = rest.join(':').trim();
    switch(k.trim()){
      case 'p': m.p = val; break;
      case 'advice': m.advice = true; break;
      case 'intro': S.intro.add(val); break;
      case 'time': spend(parseInt(val,10)||0); break;
      case 'ev': addEv(val); break;
      case 'note': addNote(val); break;
      case 'loc': toast('Bản đồ có thêm một nơi mới'); logAct('Mở địa điểm mới: '+(LOCS[val]?.name||val)); break;
      case 'scene': setBg(val); break;
      default: D.post.push(t.trim());
    }
  }
  return m;
}
function parseLine(text){
  const m = text.match(/^([^:()]{1,22}?)(?: \(([^)]+)\))?: (.*)$/s);
  if(m && NAME2KEY[m[1].trim()]) return {key:NAME2KEY[m[1].trim()], name:m[1].trim(), mod:m[2]||'', body:m[3]};
  return {key:null, body:text};
}
function showLine(text, meta){
  D.last = {text, meta:{p:meta.p, advice:meta.advice}};
  const L = parseLine(text);
  const box = $('#box'); box.className = '';
  let key = L.key, pid = meta.p;
  if(key){
    if(!S.met.has(key) && PROFILES[key]){ S.met.add(key); if(S.inCity) markNew(); }
    S.met.add(key);
  }
  if(!key && pid) key = keyFromPortrait(pid);
  if(key && pid) S.expr[key] = pid;
  const portrait = $('#portrait');
  if(meta.advice && L.key){
    box.classList.add('adv');
    $('#who').textContent = dn(L.key) + ' góp ý';
    $('#adv-av').innerHTML = portraitHTML(L.key, S.expr[L.key]);
  } else if(L.key){
    if(L.mod) box.classList.add('think');
    $('#who').textContent = dn(L.key) + (L.mod ? ' · '+L.mod : '');
  } else {
    $('#who').textContent = '';
    if(!key) box.classList.add('narr');
  }
  if(key && !meta.advice && !CHARS[key].shoe){
    portrait.innerHTML = portraitHTML(key, S.expr[key]); portrait.classList.remove('hide');
    portrait.style.filter = L.mod ? 'saturate(.5) brightness(.85)' : '';
  } else if(key && CHARS[key].shoe){
    portrait.innerHTML = portraitHTML(key); portrait.classList.remove('hide');
  } else if(!meta.advice){
    portrait.classList.add('hide');
  }
  $('#choices').innerHTML=''; D.choices=false; $('#cont').style.display='';
  const body = L.key ? L.body : text;
  S.hist.push(L.key ? `<p><b>${esc(dn(L.key))}${L.mod?' ('+esc(L.mod)+')':''}:</b> ${esc(L.body)}</p>` : `<p><i>${esc(text)}</i></p>`);
  const seen = SEEN.has(text); SEEN.add(text); saveSeen();
  $('#ff').hidden = !seen; $('#ff').classList.toggle('on', D.ff);
  if(!seen) D.ff = false;
  typeText(body, seen && D.ff);
}
const RM = matchMedia('(prefers-reduced-motion: reduce)');
function typeText(t, skip){
  const el = $('#txt'); clearInterval(D.tmr); D.full = t;
  if(skip || RM.matches){ el.textContent = t; D.typing=false; if(skip) setTimeout(()=>{ if(D.ff && !D.choices) step(); }, 90); return; }
  let i=0; D.typing=true; el.textContent='';
  D.tmr = setInterval(()=>{ i+=2; el.textContent = t.slice(0,i); if(i>=t.length){ clearInterval(D.tmr); D.typing=false; } }, 16);
}
function advance(){
  if(!D.open || D.choices) return;
  if(D.typing){ clearInterval(D.tmr); $('#txt').textContent = D.full; D.typing=false; return; }
  step();
}
function showChoices(){
  D.choices = true; D.ff = false; $('#ff').hidden = true; $('#cont').style.display='none';
  const wrap = $('#choices'); wrap.innerHTML='';
  if(!$('#txt').textContent){ $('#box').className='narr'; $('#who').textContent=''; $('#portrait').classList.add('hide'); }
  story.currentChoices.forEach((c,i)=>{
    const b = document.createElement('button'); b.className='ch';
    b.innerHTML = `<span class="k">${i+1}</span><span>${esc(c.text)}</span>`;
    b.onclick = (e) => { e.stopPropagation(); pick(i); };
    wrap.appendChild(b);
  });
}
function pick(i){
  const c = story.currentChoices[i]; if(!c) return;
  S.hist.push(`<p class="c">› ${esc(c.text)}</p>`); logAct('Chọn: '+c.text);
  story.ChooseChoiceIndex(i); D.choices=false; $('#choices').innerHTML=''; $('#txt').textContent='';
  step();
}
function endDialog(){
  D.open = false; $('#dlg').classList.remove('on'); $('#portrait').classList.add('hide'); $('#spots').style.visibility='';
  const post = D.post.slice(); D.post = [];
  const after = D.after; D.after = null;
  S.expr = {};
  if(S.inCity && !S.turtle && S.loc && LOCS[S.loc] && S.bg !== LOCS[S.loc].bg && !post.some(t=>t.startsWith('lose')||t.startsWith('go'))) setBg(LOCS[S.loc].bg);
  renderLoc();
  for(const t of post){
    const [k, ...r] = t.split(':'); const val = r.join(':').trim();
    if(k==='city') return enterCity();
    if(k==='go'){ LOCS[val].unlocked = true; S.unlockedDoc = true; return travel(val); }
    if(k==='mg'){ const [a,b] = val.split('>'); return openMG(a.trim(), (b||'').trim()); }
    if(k==='lose') return showFail(val);
    if(k==='win') return showEnd();
    if(k==='turtle') return startTurtle();
  }
  if(after) return after();
  checkSunset();
}

/* =========================================================
   SỔ PHÁC THẢO, BẢN ĐỒ, LỊCH SỬ
   ========================================================= */
function addEv(id){ if(!EVIDENCE[id] || S.ev.includes(id)) return; S.ev.push(id); setv('co_'+id, true); toast('Sổ phác thảo: '+EVIDENCE[id].t); logAct('Ghi vật chứng: '+EVIDENCE[id].t); markNew(); }
function addNote(id){ if(!NOTES[id] || S.notes.includes(id)) return; S.notes.push(id); toast('Sổ phác thảo: '+NOTES[id][0]); markNew(); }
let noteTab = 'ev';
function openNote(tab){
  if(tab) noteTab = tab; S.newNote=false; $('#b-note').classList.remove('new');
  const tabs = [['ev','Vật chứng'],['notes','Ghi chú'],['people','Nhân vật'],['log','Bảng ghi']];
  if(S.lessons.length) tabs.splice(3,0,['lessons','Bài học các lượt trước']);
  $('#ntabs').innerHTML = tabs.map(([k,l])=>`<button class="tab${k===noteTab?' on':''}" data-t="${k}">${l}</button>`).join('');
  $('#ntabs').querySelectorAll('.tab').forEach(b=>b.onclick=()=>openNote(b.dataset.t));
  const nb = $('#nbody');
  if(noteTab==='ev') nb.innerHTML = S.ev.length ? `<div class="cards">${S.ev.map(evCard).join('')}</div>` : `<p class="empty">Chưa có vật chứng nào. Vật chứng là thứ bạn tự nhìn thấy, đo được, hoặc nghe từ người trực tiếp chứng kiến.</p>`;
  if(noteTab==='notes') nb.innerHTML = S.notes.length ? `<div class="cards">${S.notes.map(id=>`<div class="card"><div class="ic">✎</div><div><h4>${esc(NOTES[id][0])}</h4><p>${esc(NOTES[id][1])}</p></div></div>`).join('')}</div>` : `<p class="empty">Chưa ghi chú gì.</p>`;
  if(noteTab==='people'){ const ks = [...S.met].filter(k=>PROFILES[k]); nb.innerHTML = ks.length ? `<div class="cards">${ks.map(k=>`<div class="card"><div class="ic" style="filter:grayscale(1) contrast(1.2)">${portraitHTML(k)}</div><div><h4>${esc(dn(k))}</h4><p>${esc(PROFILES[k])}</p></div></div>`).join('')}</div>` : `<p class="empty">Chưa gặp ai.</p>`; }
  if(noteTab==='lessons') nb.innerHTML = `<div class="cards">${S.lessons.map((l,i)=>`<div class="card"><div class="ic">${i+1}</div><div><h4>Lượt ${i+1}</h4><p>${esc(l)}</p></div></div>`).join('')}</div>`;
  if(noteTab==='log') nb.innerHTML = S.log.length ? `<ul class="loglist">${S.log.map(e=>`<li><span class="t">${e.c} giọt</span><span>${esc(e.t)}</span></li>`).join('')}</ul>` : `<p class="empty">Chưa có gì.</p>`;
  openModal('#m-note');
}
const evCard = (id, sel) => { const E = EVIDENCE[id]; const img = asset(E.img); return `<div class="card${sel?' sel':''}" data-ev="${id}"><div class="ic">${img?`<img src="${img}" alt="">`:esc(E.k)}</div><div><h4>${esc(E.t)}</h4><p>${esc(E.d)}</p></div></div>`; };
function openMap(){
  $('#b-map').classList.remove('nudge');
  const pins = Object.entries(LOCS).filter(([id,L])=>{
    if(id==='phong_doc') return S.visited.has('phong_doc');
    if(L.unlock && L.unlock!=='_doc') return !!v(L.unlock);
    return true;
  });
  const mimg = asset('bg/ban_do.png');
  $('#map').innerHTML = `<svg viewBox="0 0 1000 667" preserveAspectRatio="xMidYMid meet">
    ${mimg ? `<image href="${mimg}" x="0" y="0" width="1000" height="667" preserveAspectRatio="xMidYMid slice"/><rect width="1000" height="667" fill="#0b1020" opacity=".18"/>` : `<rect width="1000" height="667" fill="#e8d8b4"/>`}
    ${pins.map(([id,L])=>`<g class="pin${S.loc===id?' here':''}" data-go="${id}" tabindex="0" role="button" aria-label="${esc(L.name)}"><circle class="c" cx="${L.pin[0]}" cy="${L.pin[1]}" r="16"/><text x="${L.pin[0]}" y="${L.pin[1]-26}" text-anchor="middle">${esc(L.name)}</text></g>`).join('')}
  </svg>`;
  $('#map').querySelectorAll('.pin').forEach(p=>{ p.onclick=()=>travel(p.dataset.go); p.onkeydown=e=>{ if(e.key==='Enter') travel(p.dataset.go); }; });
  openModal('#m-map');
}
function openHist(){ $('#hbody').innerHTML = S.hist.slice(-400).join('') || '<p class="empty">Chưa có gì.</p>'; openModal('#m-hist'); const b=$('#hbody'); setTimeout(()=>b.scrollTop=b.scrollHeight,0); }
function openModal(sel){ document.querySelectorAll('.modal.on').forEach(m=>m.classList.remove('on')); $(sel).classList.add('on'); }
function closeModal(){ document.querySelectorAll('.modal.on').forEach(m=>{ if(m.id!=='m-mg') m.classList.remove('on'); }); }

/* =========================================================
   MINIGAME
   ========================================================= */
let MG = null;
function openMG(kind, ret){
  MG = {kind, ret};
  $('#mg-x').style.display = (kind==='doichat'||kind==='ten') ? 'none' : '';
  ({kho:mgKho, ke:mgKe, pin:mgPin, day:mgDay, doichat:mgDoiChat, ten:mgTen})[kind]();
  openModal('#m-mg');
}
function closeMG(){ $('#m-mg').classList.remove('on'); MG = null; }
function mgDone(evId, okLog){
  const ret = MG.ret; closeMG();
  if(evId){ addEv(evId); setv('co_'+evId, true); }
  if(okLog) logAct(okLog);
  if(ret) runKnot(ret); else checkSunset();
}
function mgHead(t, sub){ $('#mg-title').textContent=t; $('#mg-sub').textContent=sub; }

/* 1. Ước sức chứa kho */
function mgKho(){
  mgHead('Ước sức chứa một nhà kho', 'Nhân ba con số: số kệ dọc tường, số tầng mỗi kệ, số cuộn mỗi tầng.');
  const st = {a:1,b:1,c:10};
  const unit = (i) => { const x=40+i*82; const burnt = (i===2||i===6);
    if(burnt) return `<rect x="${x}" y="398" width="70" height="12" fill="#3a2a1a" stroke="${INK}" stroke-width="3"/><ellipse cx="${x+35}" cy="392" rx="44" ry="16" fill="#3b332b" stroke="${INK}" stroke-width="3"/>`;
    let s=`<rect x="${x}" y="110" width="70" height="300" fill="#7a4f2a" stroke="${INK}" stroke-width="4"/>`;
    for(let j=0;j<5;j++){ s+=`<rect x="${x+5}" y="${116+j*58}" width="60" height="50" fill="#2c1d10"/>`; for(let a=0;a<4;a++)for(let b=0;b<3;b++) s+=`<circle cx="${x+13+a*15}" cy="${126+j*58+b*15}" r="6" fill="#efe2c2"/>`; }
    return s; };
  let close = `<rect x="0" y="0" width="420" height="130" fill="#2c1d10" stroke="${INK}" stroke-width="4"/>`;
  for(let r=0;r<5;r++)for(let c=0;c<20;c++) close+=`<circle cx="${14+c*20.5}" cy="${16+r*24.5}" r="9" fill="#efe2c2" stroke="${INK}" stroke-width="1.5"/>`;
  $('#mg-body').innerHTML = `<div class="col" style="flex:1">
      <svg viewBox="0 0 880 440" style="width:100%;background:#1a1410;border-radius:.3em">
        <path d="M40 80 H860" stroke="#e7c98f" stroke-width="3" marker-end="url(#a)"/><text x="450" y="64" text-anchor="middle" fill="#e7c98f" font-size="20" font-family="Be Vietnam Pro">bức tường dài 30 bước · mỗi kệ rộng 3 bước</text>
        ${[0,1,2,3,4,5,6,7,8,9].map(unit).join('')}<rect x="0" y="410" width="880" height="30" fill="#2b221a"/>
      </svg>
      <div style="margin-top:.6em;font-size:.85em;color:var(--ivory-dim)">Nhìn gần một tầng kệ:</div>
      <svg viewBox="0 0 420 130" style="width:42%;margin-top:.3em">${close}</svg>
    </div>
    <div class="side">
      <div class="hint"><b>Nguyệt:</b> Có hai cái kệ đã sập thành tro, nhưng chân kệ vẫn còn. Đếm cả chỗ của chúng. Một tầng thì đếm một hàng rồi nhân số hàng.</div>
      ${[['a','Số kệ dọc bức tường',1,0,20],['b','Số tầng mỗi kệ',1,0,10],['c','Số cuộn mỗi tầng',10,0,300]].map(([k,l,s,mn,mx])=>`<div class="step"><span>${l}</span><div class="ctl"><button data-k="${k}" data-d="-${s}" aria-label="Bớt">−</button><output id="o-${k}">${st[k]}</output><button data-k="${k}" data-d="${s}" aria-label="Thêm">+</button></div></div>`).join('')}
      <div class="step"><span>Một kho chứa khoảng</span><b id="o-t" style="color:var(--gold)">10</b></div>
      <button class="btn" id="kho-ok">Ước tính</button><div class="fb" id="kho-fb"></div>
    </div>`;
  const upd = () => { ['a','b','c'].forEach(k=>$('#o-'+k).textContent=st[k]); $('#o-t').textContent=(st.a*st.b*st.c).toLocaleString('vi-VN'); };
  $('#mg-body').querySelectorAll('.ctl button').forEach(b=>b.onclick=()=>{ const k=b.dataset.k; st[k]=Math.max(0, st[k]+parseInt(b.dataset.d,10)); upd(); });
  $('#kho-ok').onclick = () => {
    const wrong = (st.a!==10) + (st.b!==5) + (st.c<90||st.c>110);
    const fb = $('#kho-fb');
    if(wrong===0){
      fb.className='fb good'; fb.innerHTML = `Một kho chừng ${(st.a*st.b*st.c).toLocaleString('vi-VN')} cuộn. Sáu kho: khoảng <b>${(st.a*st.b*st.c*6).toLocaleString('vi-VN')}</b> cuộn.`;
      $('#kho-ok').textContent='Ghi vào sổ'; $('#kho-ok').onclick=()=>mgDone('e_kho','Ước sức chứa dãy kho: khoảng 30.000 cuộn');
    } else { fb.className='fb bad'; fb.textContent = wrong===1 ? 'Còn một con số chưa đúng.' : `Còn ${wrong} con số chưa đúng.`; }
  };
}

/* 2. Soi kệ */
const GREEK = ['Α','Β','Γ','Δ','Ε','Ζ'];
const KE_FRESH = ['Β3','Δ6','Ε2'];
const KE_OLD = ['Α5','Α8','Β1','Β6','Γ2','Γ4','Γ7','Δ1','Δ4','Ε5','Ε8','Ζ1','Ζ3','Ζ6'];
const KE_EMPTY = [...KE_FRESH, ...KE_OLD];
function cellSVG(code, big){
  const empty = KE_EMPTY.includes(code);
  if(!empty) return `<svg viewBox="0 0 100 80">${[0,1,2,3].map(a=>[0,1,2].map(b=>`<circle cx="${15+a*23}" cy="${15+b*25}" r="10" fill="#efe2c2" stroke="${INK}" stroke-width="2"/>`).join('')).join('')}</svg>`;
  if(!big) return `<svg viewBox="0 0 100 80"><rect width="100" height="80" fill="#1d130a"/><rect y="62" width="100" height="18" fill="#8b8478" opacity=".35"/></svg>`;
  const fresh = KE_FRESH.includes(code);
  const outlines = [0,1,2,3].map(i=>`<rect x="8" y="${10+i*16}" width="84" height="10" rx="5" fill="#a49b8c" ${fresh?'':'filter="url(#fb)" opacity=".55"'}/>`).join('');
  return `<svg viewBox="0 0 100 80"><defs><filter id="fb"><feGaussianBlur stdDeviation="1.6"/></filter></defs><rect width="100" height="80" fill="#6f685e"/>${[...Array(60)].map((_,i)=>`<circle cx="${(i*37)%100}" cy="${(i*53)%80}" r=".9" fill="#8d877c"/>`).join('')}${outlines}${fresh?'':'<rect width="100" height="80" fill="#7a746a" opacity=".35"/>'}</svg>`;
}
function mgKe(){
  mgHead('Soi từng ô kệ', 'Bấm vào một ô để nhìn gần. Ô nào trống thì ghi lại: trống từ hôm qua, hay trống đã lâu.');
  const marks = S.keMarks; let cur = null;
  const codes = []; GREEK.forEach(g=>{ for(let n=1;n<=8;n++) codes.push(g+n); });
  $('#mg-body').innerHTML = `<div class="col" style="flex:1"><div class="grid" id="ke-grid" style="grid-template-columns:repeat(8,1fr)"></div></div>
    <div class="side"><div id="ke-insp" style="background:#0e1524;border:1px solid #ffffff1a;border-radius:.35em;padding:.7em;min-height:14em"><p class="empty">Chọn một ô kệ.</p></div>
    <div class="hint"><b>Nhật Anh:</b> Không chỉ đếm ô trống. Nhìn lớp bụi: vệt sạch còn sắc nét hay đã bị bụi phủ lại?</div>
    <div class="step"><span>Đã ghi</span><b id="ke-n" style="color:var(--gold)">0 ô</b></div>
    <button class="btn" id="ke-ok">Mình đã nhìn hết các ô</button><div class="fb" id="ke-fb"></div></div>`;
  const grid = $('#ke-grid');
  const draw = () => {
    grid.innerHTML = codes.map(c=>`<button class="cell${marks[c]?' mk-'+marks[c]:''}${cur===c?' cur':''}" data-c="${c}" aria-label="Ô ${c}"><span class="code">${c}</span>${cellSVG(c)}</button>`).join('');
    grid.querySelectorAll('.cell').forEach(b=>b.onclick=()=>{ cur=b.dataset.c; draw(); insp(); });
    $('#ke-n').textContent = Object.keys(marks).length + ' ô';
  };
  const insp = () => {
    const el = $('#ke-insp'); const empty = KE_EMPTY.includes(cur); const fresh = KE_FRESH.includes(cur);
    el.innerHTML = `<div style="font-weight:600;color:#e7c98f;margin-bottom:.4em">Ô ${cur}</div><div style="border:2px solid #5b3d22">${cellSVG(cur,true)}</div>
      <p style="font-size:.86em;line-height:1.5;color:var(--ivory-dim)">${!empty?'Sách còn nguyên trên kệ, đầu cuộn hướng ra ngoài. Không ám khói.': fresh?'Lớp bụi xám mịn. Những vệt sạch hình trụ sắc nét, sáng trơn, nằm song song. Không có một hạt tro nào.':'Lớp bụi xám mịn. Những vệt hình trụ mờ mờ, đã bị một lớp bụi mỏng phủ lại. Không có một hạt tro nào.'}</p>
      ${empty?`<div style="display:flex;gap:.4em;flex-wrap:wrap"><button class="btn ghost" data-m="moi" style="border-color:#8fd3cd">Trống từ hôm qua</button><button class="btn ghost" data-m="cu" style="border-color:var(--warn)">Trống đã lâu</button>${marks[cur]?'<button class="btn ghost" data-m="">Bỏ ghi</button>':''}</div>`:''}`;
    el.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{ if(b.dataset.m) marks[cur]=b.dataset.m; else delete marks[cur]; draw(); insp(); });
  };
  draw();
  $('#ke-ok').onclick = () => {
    let err = 0; for(const c of KE_EMPTY){ const want = KE_FRESH.includes(c)?'moi':'cu'; if(marks[c]!==want) err++; }
    const fb = $('#ke-fb');
    if(err===0){ S.keCodes = KE_EMPTY.slice(); fb.className='fb good'; fb.textContent='Mười bảy ô. Ba ô mới, mười bốn ô cũ.'; $('#ke-ok').textContent='Ghi vào sổ'; $('#ke-ok').onclick=()=>mgDone('e_ke','Soi kệ: 17 ô trống, 3 mới, 14 cũ'); }
    else { fb.className='fb bad'; fb.textContent = err<=2 ? 'Gần đúng rồi. Còn 1 hoặc 2 ô bỏ sót hoặc ghi nhầm.' : 'Chưa đúng. Còn nhiều ô bỏ sót hoặc ghi nhầm.'; }
  };
}

/* 3. Đối chiếu Pinakes */
const PIN_PRECIOUS = ['Homer, Iliad, bản có chú giải của Aristarchus','Herophilos, Về mạch đập','Hipparchus, Danh mục các vì sao','Eratosthenes, Về số đo Trái Đất','Euclid, Cơ sở, bản chép tay sớm nhất','Sappho, Thơ, quyển một','Aeschylus, bi kịch, bản mượn từ Athens','Aristarchus xứ Samos, Về kích thước Mặt Trời và Mặt Trăng','Erasistratus, Về các cơn sốt','Callimachus, Pinakes, bản gốc phần đầu','Archimedes, Về các vật nổi','Manetho, Lịch sử Ai Cập','Sophocles, bi kịch, bản mượn từ Athens','Ctesibius, Về máy nước','Theophrastus, Lịch sử cây cỏ','Euripides, bi kịch, bản mượn từ Athens','Apollonius xứ Perga, Về các đường cônic'];
const PIN_STAR_ON_SHELF = ['Hesiod, Gia phả các thần','Pindar, Tụng ca','Plato, Cộng hòa','Aristotle, Về linh hồn','Herodotus, Sử ký'];
const PIN_PLAIN = ['Sổ ghi thuế cảng, năm thứ mười hai','Danh sách thuyền vào cảng, mùa hè','Bài tập ngữ pháp của học trò','Thư từ của người giữ kho','Bản sao luật đường thủy','Ghi chép giá lúa mì','Từ điển từ cổ của Homer, bản tóm tắt','Thơ ca ngợi nhà vua, tập ba','Bản đồ đường bờ biển phía đông','Sổ tay chữa bệnh cho ngựa','Danh sách đồ cúng đền Serapis','Truyện ngụ ngôn, bản chép cho trẻ con'];
const PIN_OTHER_CODES = ['Α1','Α2','Α3','Α4','Α6','Α7','Β2','Β4','Β5','Β7','Β8','Γ1','Γ3','Γ5','Γ6','Γ8','Δ2'];
function pinRows(){
  const rows = [];
  const emptyOrder = ['Α5','Δ6','Ζ3','Γ4','Β1','Ε8','Γ7','Δ1','Β3','Α8','Ζ6','Ε5','Γ2','Δ4','Ε2','Β6','Ζ1'];
  emptyOrder.forEach((c,i)=>rows.push({c, t:PIN_PRECIOUS[i], star:true}));
  PIN_OTHER_CODES.forEach((c,i)=>rows.push(i<5 ? {c,t:PIN_STAR_ON_SHELF[i],star:true} : {c,t:PIN_PLAIN[i-5],star:false}));
  return rows.sort((a,b)=>a.t.localeCompare(b.t,'vi'));
}
function mgPin(){
  mgHead('Đối chiếu Pinakes', 'Tìm trong danh mục từng ký hiệu Nhật Anh nhớ được. Danh mục xếp theo tên sách, không theo ký hiệu.');
  const mem = S.keCodes.length ? S.keCodes : KE_EMPTY; const ok = new Set(); const rows = pinRows();
  $('#mg-body').innerHTML = `<div class="side"><div style="font-size:.88em;color:var(--ivory-dim)">Mười bảy ô trống Nhật Anh nhớ:</div><div class="memo" id="pin-mem"></div>
      <div class="hint"><b>Nguyệt:</b> Danh mục có ba cột: ký hiệu, tên sách, và dấu ★ của người giữ sách.</div><div class="fb" id="pin-fb"></div><div id="pin-q"></div></div>
    <div class="col" style="flex:1;overflow:auto;background:#f3ead8;color:#2a2116;border-radius:.3em;max-height:100%">
      <div class="pinrow" style="font-weight:700;border-bottom:2px solid #2a2116"><span>Ký hiệu</span><span>Tên sách</span><span>★</span></div>
      ${rows.map(r=>`<button class="pinrow" data-c="${r.c}"><span class="cd" style="color:#7a2b14">${r.c}</span><span>${esc(r.t)}</span><span class="st" style="color:#a06a00">${r.star?'★':''}</span></button>`).join('')}
    </div>`;
  const memo = () => { $('#pin-mem').innerHTML = mem.map(c=>`<span class="${ok.has(c)?'ok':''}">${c}</span>`).join(''); };
  memo();
  $('#mg-body').querySelectorAll('button.pinrow').forEach(b=>b.onclick=()=>{
    const c = b.dataset.c; const fb=$('#pin-fb');
    if(mem.includes(c)){ ok.add(c); b.classList.add('ok'); b.style.background='#cfe3c8'; fb.className='fb good'; fb.textContent=`${c} khớp. (${ok.size}/17)`; memo(); if(ok.size===mem.length) ask(); }
    else { fb.className='fb bad'; fb.textContent=`Ô ${c} vẫn còn sách trên kệ.`; }
  });
  const ask = () => {
    $('#pin-q').innerHTML = `<div class="q"><div style="font-weight:600">Mười bảy cuốn này có điểm gì chung?</div>
      ${[['a','Đều là sách y học'],['b','Đều có dấu ★ của người giữ sách: những bản quý nhất'],['c','Đều nằm ở dãy kệ gần cửa sổ']].map(([k,t])=>`<button class="ch" data-a="${k}"><span class="k">${k.toUpperCase()}</span><span>${t}</span></button>`).join('')}</div>`;
    $('#pin-q').querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>{
      const fb=$('#pin-fb');
      if(b.dataset.a==='b'){ fb.className='fb good'; fb.textContent='Không phải lửa chọn sách. Có người chọn.'; $('#pin-q').innerHTML='<button class="btn" id="pin-done">Ghi vào sổ</button>'; $('#pin-done').onclick=()=>mgDone('e_pin','Đối chiếu Pinakes: 17 ô trống là 17 bản quý nhất'); }
      else { fb.className='fb bad'; fb.textContent='Nhìn lại các cột trong danh mục.'; }
    });
  };
}

/* 4. Dây niên đại */
function mgDay(){
  mgHead('Dây niên đại', 'Kẹp các mốc lên sợi dây, từ xưa nhất tới gần nhất.');
  const cards = [
    {id:'b', t:'Nhà vua đuổi học giả. Người giữ thư viện bỏ chạy.', y:145, src:'Lời Lysandros'},
    {id:'d', t:'Đêm lửa ở bến tây.', y:48, src:'Cả thành'},
    {id:'a', t:'Nhà vua giao việc gom sách cho thư viện.', y:295, src:'Dòng đầu của Pinakes'},
    {id:'c', t:'Những chiếc rương đầu tiên ra bến phía đông.', y:51, src:'Lời Myrto: ba năm trước'},
  ];
  const order = ['a','b','c','d']; const placed = [];
  const render = () => {
    const done = placed.length===4;
    const rope = () => {
      if(!done) return `<svg viewBox="0 0 1000 120" style="width:100%"><path d="M20 40 Q500 70 980 40" stroke="#b08a5a" stroke-width="6" fill="none"/>${placed.map((id,i)=>`<g transform="translate(${90+i*230},50)"><rect x="-8" y="-20" width="16" height="26" fill="#8c5a2b"/><rect x="-90" y="8" width="180" height="56" fill="#f3ead8" stroke="${INK}" stroke-width="2"/><text x="0" y="40" text-anchor="middle" font-size="16" fill="#2a2116" font-family="Be Vietnam Pro">khoảng ${cards.find(c=>c.id===id).y} TCN</text></g>`).join('')}</svg>`;
      const X = y => 30 + (295-y)/(295-48)*940;
      return `<svg viewBox="0 0 1000 170" style="width:100%"><path d="M20 40 H980" stroke="#b08a5a" stroke-width="6"/>
        <rect x="${X(295)}" y="70" width="${X(145)-X(295)}" height="14" fill="#6fae6b"/><text x="${(X(295)+X(145))/2}" y="106" text-anchor="middle" fill="#cfe9cc" font-size="17" font-family="Be Vietnam Pro">150 năm có người giữ sách</text>
        <rect x="${X(145)}" y="70" width="${X(51)-X(145)}" height="14" fill="#c4572e"/><text x="${(X(145)+X(51))/2}" y="106" text-anchor="middle" fill="#f0a08a" font-size="17" font-family="Be Vietnam Pro">gần trăm năm chỉ còn người đếm sách</text>
        <rect x="${X(51)}" y="70" width="${X(48)-X(51)+4}" height="14" fill="#d9a441"/>
        ${order.map(id=>{const c=cards.find(k=>k.id===id);return `<g transform="translate(${X(c.y)},40)"><rect x="-6" y="-16" width="12" height="22" fill="#8c5a2b"/><text y="-24" text-anchor="${id==='d'?'end':id==='c'?'end':'middle'}" fill="#f3ead8" font-size="15" font-family="Be Vietnam Pro">${c.y} TCN</text></g>`}).join('')}
        <text x="${X(48)}" y="140" text-anchor="end" fill="#e7c98f" font-size="16" font-family="Be Vietnam Pro">đám cháy: một cái kẹp</text></svg>`;
    };
    $('#mg-body').innerHTML = `<div class="col" style="flex:1;display:flex;flex-direction:column;gap:1em">${rope()}
      ${done?'':`<div class="rope-cards">${cards.map(c=>`<button class="rc${placed.includes(c.id)?' used':''}" data-id="${c.id}">${esc(c.t)}<small>khoảng ${c.y} TCN · ${esc(c.src)}</small></button>`).join('')}</div>`}
      <div class="fb" id="day-fb"></div><div id="day-q"></div></div>
      <div class="side"><div class="hint"><b>Nguyệt:</b> Đo bằng gang tay. Mỗi gang tay chừng ba mươi năm. Kẹp hết các mốc rồi hẵng nhìn xem đoạn dây nào dài nhất.</div></div>`;
    $('#mg-body').querySelectorAll('.rc').forEach(b=>b.onclick=()=>{
      const id=b.dataset.id;
      if(id===order[placed.length]){ placed.push(id); render(); }
      else { b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake'); $('#day-fb').className='fb bad'; $('#day-fb').textContent='Mốc này chưa tới lượt. Năm TCN càng lớn thì càng xưa.'; }
    });
    if(done){
      $('#day-q').innerHTML = `<div class="q"><div style="font-weight:600">Phần lớn sợi dây kể về chuyện gì?</div>
        ${[['a','Đêm lửa ở bến tây'],['b','Những năm thư viện không còn người giữ, sách bị đếm bớt dần'],['c','Chiến tranh giữa Alexandria và La Mã']].map(([k,t])=>`<button class="ch" data-a="${k}"><span class="k">${k.toUpperCase()}</span><span>${t}</span></button>`).join('')}</div>`;
      $('#day-q').querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>{
        if(b.dataset.a==='b'){ $('#day-q').innerHTML='<button class="btn" id="day-done">Ghi vào sổ</button>'; $('#day-fb').className='fb good'; $('#day-fb').textContent='Đám cháy chỉ chiếm một cái kẹp ở cuối dây. Đoạn dài nhất là gần trăm năm thư viện không còn người giữ.'; $('#day-done').onclick=()=>mgDone('e_day','Căng dây niên đại'); }
        else { $('#day-fb').className='fb bad'; $('#day-fb').textContent='Nhìn lại xem đoạn dây nào dài nhất.'; }
      });
    }
  };
  render();
}

/* 5. Đối chất */
function mgDoiChat(){
  mgHead('Phiên đối chất', 'Nikanor nói từng câu. Đưa cho Dorion đúng vật chứng để đánh đổ câu đó. Đưa sai thì Nikanor lấy lại thế, không bị trừ gì.');
  let i = 0; const res = []; let sel = null;
  const render = (msg, cls) => {
    const C = CLAIMS[i]; const q = typeof C.q==='function'?C.q():C.q;
    $('#mg-body').innerHTML = `<div style="flex:0 0 11em">${portraitHTML('nikanor', 'nikanor_khung')}</div>
      <div class="col" style="flex:1;display:flex;flex-direction:column;gap:.6em">
        <div class="pips">${CLAIMS.map((_,k)=>`<i class="${res[k]==='b'?'b':res[k]==='s'?'s':k===i?'c':''}"></i>`).join('')}</div>
        <div style="font-size:.85em;color:var(--ivory-dim)">Nikanor nói, câu ${i+1} trên ${CLAIMS.length}:</div>
        <div class="claim">“${esc(q)}”</div>
        <div class="fb ${cls||''}" id="dc-fb">${msg||''}</div>
        <div style="font-size:.85em;color:var(--ivory-dim)">Chọn một vật chứng trong sổ phác thảo:</div>
        <div class="cards" id="dc-ev" style="grid-template-columns:repeat(auto-fill,minmax(15em,1fr))">${S.ev.map(id=>evCard(id, id===sel)).join('') || '<p class="empty">Sổ chưa có vật chứng nào.</p>'}</div>
        <div style="display:flex;gap:.6em;margin-top:.3em"><button class="btn" id="dc-give" ${sel?'':'disabled'}>Đưa cho Dorion</button><button class="btn ghost" id="dc-none">Không có gì để đưa</button></div>
      </div>`;
    $('#dc-ev').querySelectorAll('.card').forEach(c=>{ c.style.cursor='pointer'; c.onclick=()=>{ sel=c.dataset.ev; render(msg,cls); }; });
    $('#dc-give').onclick = () => {
      if(C.ok.includes(sel)){ res[i]='b'; const line = C.win[sel]; logAct('Đối chất: đánh đổ câu '+(i+1)); next(`<b>${esc(line.split(':')[0])}:</b>${esc(line.slice(line.indexOf(':')+1))}<br><span style="color:#a6dca2">Câu nói ấy đổ.</span>`, 'good'); }
      else { logAct('Đối chất: đưa sai vật chứng ở câu '+(i+1)); render(`<b>Nikanor:</b>${esc(C.back.slice(C.back.indexOf(':')+1))}<br><span style="color:#f0a08a">Nikanor lấy lại thế. Thử vật chứng khác.</span>`, 'bad'); }
    };
    $('#dc-none').onclick = () => { res[i]='s'; logAct('Đối chất: bỏ qua câu '+(i+1)); next('Câu nói ấy vẫn đứng nguyên.', 'bad'); };
  };
  const next = (msg, cls) => {
    i++; sel=null;
    if(i>=CLAIMS.length){
      const stood = CLAIMS.map((c,k)=>res[k]==='s'?(typeof c.q==='function'?c.q():c.q):null).filter(Boolean);
      $('#mg-body').innerHTML = `<div class="col" style="flex:1;display:flex;flex-direction:column;gap:1em;justify-content:center;align-items:center;text-align:center"><div class="fb ${cls}" style="max-width:40em">${msg}</div><div class="pips">${CLAIMS.map((_,k)=>`<i class="${res[k]}"></i>`).join('')}</div><button class="btn" id="dc-end">Tiếp</button></div>`;
      $('#dc-end').onclick = () => { closeMG(); if(stood.length===0) runKnot('thang'); else { S.unbroken = stood; runKnot('thua_thieu_chung'); } };
      return;
    }
    render(msg, cls);
  };
  render();
}

/* Chọn tên trên mai rùa */
function mgTen(){
  mgHead('Viết một cái tên lên mai rùa', 'Chỉ được viết một lần.');
  const cands = [];
  const add = (key, label) => cands.push({key, label});
  if(S.met.has('nikanor')) add('nikanor','Nikanor, thủ quỹ');
  if(S.met.has('rufus')) add('rufus', S.intro.has('rufus') ? 'Rufus, đội trưởng La Mã' : 'Viên đội trưởng La Mã');
  if(S.met.has('lys')) add('lys', S.intro.has('lys') ? 'Lysandros, thầy dạy chữ' : 'Ông lão ôm hộp gỗ');
  if(S.met.has('myrto') && S.intro.has('myrto')) add('myrto','Myrto, người chép sách'); else if(S.met.has('myrto') || v('thay_myrto')) add('myrto','Cô gái ôm giỏ mây');
  if(S.met.has('dorion')) add('dorion', S.intro.has('dorion') ? 'Dorion, tư tế' : 'Vị tư tế');
  if(S.met.has('ga')) add('ga','Gã áo nâu');
  if(!cands.length) add('nikanor','Nikanor, thủ quỹ');
  let sel=null;
  const render = () => {
    $('#mg-body').innerHTML = `<div class="col" style="flex:1"><div class="cards" style="grid-template-columns:repeat(auto-fill,minmax(12em,1fr))">
      ${cands.map(c=>`<button class="card${sel===c.key?' sel':''}" data-k="${c.key}" style="flex-direction:column;align-items:center;text-align:center"><div style="width:7em;height:9em">${portraitHTML(c.key)}</div><h4>${esc(c.label)}</h4></button>`).join('')}</div></div>
      <div class="side"><div class="hint"><b>Phúc:</b> Viết rồi là không xóa được đâu.</div>${sel?`<div class="fb">Viết tên <b>${esc(cands.find(c=>c.key===sel).label)}</b> lên mai rùa?</div><button class="btn" id="ten-ok">Viết</button>`:'<div class="fb">Chọn một người.</div>'}</div>`;
    $('#mg-body').querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{ sel=b.dataset.k; render(); });
    const ok = $('#ten-ok'); if(ok) ok.onclick = () => {
      logAct('Viết tên lên mai rùa: '+cands.find(c=>c.key===sel).label); closeMG();
      const map = {nikanor:'dung_ten', rufus:'thua_rufus', lys:'thua_myrto', myrto:'thua_myrto', dorion:'thua_dorion', ga:'thua_ga'};
      runKnot(map[sel]);
    };
  };
  render();
}

/* =========================================================
   CÁC MỐC LỚN
   ========================================================= */
function enterCity(){
  S.inCity = true; S.clock = TOTAL_DROPS; $('#hud').hidden=false; drawClock();
  S.loc='cong'; S.visited.add('cong'); setBg('cong'); renderLoc();
  logAct('Tới Alexandria');
  runKnot('den_noi', AFTER('city'));
}
function startTurtle(){
  if(S.turtle) return; S.turtle = true;
  S.loc='san_trong'; $('#locname').textContent='Sân trong'; $('#spots').innerHTML='';
  logAct('Hoàng hôn. Kim Quy nổi lên ở hồ nước');
  runKnot('rua_noi_len', AFTER('ten'));
}
function showFail(type){
  S.inCity=false; $('#hud').hidden=true; $('#spots').innerHTML=''; $('#party').innerHTML='';
  const luot = v('luot'); const base = 1831 + luot;
  const teams = ['Đội Thalia của Khoa','Ba đứa lớp 10A2','Đội Sisyphus đời thứ hai','Hội đọc sách quận 3'];
  $('#slab').innerHTML = teams.slice(0,3).map((t,i)=>`<li>${t} · thứ ${base-3+i}</li>`).join('') + `<li class="me">Nhật Anh · Phúc · Nguyệt · thứ ${base}</li>`;
  let clue = FAIL_CLUES[type] || '';
  if(type==='thieu_chung') clue = 'Những câu Nikanor chưa bị đánh đổ: ' + S.unbroken.map(q=>'“'+q+'”').join(' ');
  $('#clue').textContent = clue;
  S.lessons.push(clue);
  $('#flog').innerHTML = S.log.map(e=>`<li><span class="t">${e.c} giọt</span><span>${esc(e.t)}</span></li>`).join('');
  $('#fail').classList.add('on');
  $('#b-home').onclick = () => { $('#fail').classList.remove('on'); runKnot('doi_thuc', AFTER('restart', type)); };
}
function restart(type){
  const luot = v('luot'); setBg('den');
  story.ResetState(); setv('luot', luot+1); setv('loai_thua', type);
  S = freshState(S);
  runKnot('mo_dau');
}
function showEnd(){
  S.inCity=false; $('#hud').hidden=true;
  $('#endtxt').textContent = `Bạn đã khiến chính người của thành Alexandria đứng ra vạch mặt Nikanor, ở lượt thứ ${v('luot')}. Những chiếc rương đã về. Bóng tượng Clio đã rõ thêm một chút. Nàng chưa về, nhưng đã về gần thêm một bước.`;
  $('#end').classList.add('on');
}

/* =========================================================
   KHỞI ĐỘNG
   ========================================================= */
function fit(){ const st=$('#stage'); st.style.setProperty('--u', (st.clientWidth/1280*16).toFixed(2)+'px'); }
addEventListener('resize', fit);
document.addEventListener('keydown', e=>{
  if(e.key==='Escape' && $('#m-save').classList.contains('on')){ $('#m-save').classList.remove('on'); return; }
  if($('#title').classList.contains('on')) return;
  if((e.key==='l'||e.key==='L') && story && !$('#fail').classList.contains('on') && !$('#end').classList.contains('on')){ if($('#m-save').classList.contains('on')) $('#m-save').classList.remove('on'); else openSaves(); return; }
  if($('#m-save').classList.contains('on')) return;
  if(e.key==='Escape'){ closeModal(); return; }
  const modalOn = document.querySelector('.modal.on');
  if(D.open && !modalOn){
    if(e.key===' '||e.key==='Enter'){ e.preventDefault(); advance(); return; }
    if(D.choices && /^[1-9]$/.test(e.key)){ pick(parseInt(e.key,10)-1); return; }
  }
  if(!S?.inCity || D.open || $('#m-mg').classList.contains('on')) return;
  if(e.key==='m'||e.key==='M') openMap();
  if(e.key==='n'||e.key==='N') openNote();
  if(e.key==='h'||e.key==='H') openHist();
});
$('#dlg').addEventListener('click', advance);
$('#ff').addEventListener('click', e=>{ e.stopPropagation(); D.ff = !D.ff; $('#ff').classList.toggle('on', D.ff); if(D.ff) advance(); });
$('#b-map').onclick = () => { if(!D.open) openMap(); };
$('#b-note').onclick = () => openNote();
$('#b-hist').onclick = openHist;
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=closeModal);
document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click', e=>{ if(e.target===m && m.id!=='m-mg') closeModal(); }));
$('#mg-x').onclick = () => { logAct('Bỏ dở minigame'); closeMG(); checkSunset(); };
$('#b-again').onclick = () => { $('#end').classList.remove('on'); story.ResetState(); S = freshState(); setBg('den'); runKnot('mo_dau'); };


/* =========================================================
   LƯU & TẢI
   - Lưu được mọi lúc: giữa hội thoại, trong minigame, khi đang đi lại.
   - Một ô tự lưu (lưu khi hiện lựa chọn, sau mỗi đoạn thoại, khi đóng trang)
     và ba ô lưu tay.
   - Thua: ô tự lưu giữ sẵn đầu lượt kế. Thắng: xoá ô tự lưu.
   ========================================================= */
const AFTER_FN = {
  city: () => () => { toast('Bấm vào những vòng tròn để xem, bấm Bản đồ để đi nơi khác.'); checkSunset(); },
  ten: () => () => openMG('ten'),
  restart: type => () => restart(type),
};
function AFTER(key, arg){ const f = AFTER_FN[key](arg); f.key = key; f.arg = arg; return f; }
const SLOTS = ['auto','1','2','3'];
const slotKey = s => s==='auto' ? 'alex_save_v1' : 'alex_save_slot_'+s;
const readSave = (slot='auto') => { try { const s = localStorage.getItem(slotKey(slot)); return s ? JSON.parse(s) : null; } catch(e){ return null; } };
const clearSave = (slot='auto') => { try { localStorage.removeItem(slotKey(slot)); } catch(e){} };
const latestSave = () => SLOTS.map(s=>({s, sv:readSave(s)})).filter(x=>x.sv).sort((a,b)=>b.sv.t-a.sv.t)[0] || null;
function writeSave(obj, slot='auto'){ try { localStorage.setItem(slotKey(slot), JSON.stringify(Object.assign({v:2, t:Date.now()}, obj))); return true; } catch(e){ console.warn('Không lưu được', e); return false; } }
const serS = () => Object.assign({}, S, {met:[...S.met], used:[...S.used], visited:[...S.visited], intro:[...S.intro], hist:S.hist.slice(-400)});
const deserS = o => Object.assign(freshState(), o, {met:new Set(o.met), used:new Set(o.used), visited:new Set(o.visited), intro:new Set(o.intro)});
function canSave(){
  if(!story || !S) return 'Chưa vào game.';
  if($('#title').classList.contains('on')) return 'Đang ở màn hình chính.';
  if($('#fail').classList.contains('on')) return 'Game đã tự lưu sẵn đầu lượt kế tiếp.';
  if($('#end').classList.contains('on')) return 'Màn chơi đã kết thúc.';
  return '';
}
function placeName(){
  if(MG) return ({kho:'Đo kho',ke:'Soi kệ',pin:'Đối chiếu Pinakes',day:'Dây niên đại',doichat:'Phiên đối chất',ten:'Viết tên lên mai rùa'})[MG.kind] || 'Minigame';
  if(S.inCity) return S.loc && LOCS[S.loc] ? LOCS[S.loc].name : 'Alexandria';
  return ({den:'Đền các nàng Muse',den_thang:'Đền các nàng Muse',phong_na:'Ngoài đời',ban_an:'Ngoài đời',cong_vien:'Ngoài đời',san_bong_ro:'Ngoài đời',bep:'Ngoài đời'})[S.bg] || 'Đền các nàng Muse';
}
function saveNow(silent, slot='auto'){
  const why = canSave(); if(why){ if(!silent) toast(why); return false; }
  const mode = MG ? 'mg' : D.open ? 'dialog' : 'explore';
  const ok = writeSave({
    mode, ink: story.state.toJson(), S: serS(),
    unlocked: Object.keys(LOCS).filter(k=>LOCS[k].unlocked),
    line: D.open ? D.last : null, choices: !!D.choices, post: D.post.slice(),
    after: D.after && D.after.key ? {key:D.after.key, arg:D.after.arg} : null,
    mg: MG ? {kind:MG.kind, ret:MG.ret} : null,
    luot: v('luot'), place: placeName(), drops: S.inCity ? S.clock : null,
  }, slot);
  if(ok && !silent) toast(slot==='auto' ? 'Đã lưu' : 'Đã lưu vào ô '+slot);
  return ok;
}
function saveNewRun(luot, loai){
  writeSave({mode:'newrun', luot, loai, S:{hist:S.hist.slice(-400), lessons:S.lessons, intro:[...S.intro]}, place:'Đền các nàng Muse', drops:null});
}
function loadSave(slot){
  const sv = slot ? readSave(slot) : latestSave()?.sv; if(!sv) return false;
  $('#title').classList.remove('on'); closeModal(); $('#m-save').classList.remove('on'); if(MG) closeMG();
  $('#fail').classList.remove('on'); $('#end').classList.remove('on');
  clearInterval(D.tmr); D.open=false; D.choices=false; D.typing=false; D.post=[]; D.after=null;
  $('#dlg').classList.remove('on'); $('#choices').innerHTML=''; $('#txt').textContent=''; $('#portrait').classList.add('hide'); $('#spots').style.visibility='';
  if(sv.mode==='newrun'){
    story.ResetState(); setv('luot', sv.luot); setv('loai_thua', sv.loai||'');
    S = freshState({hist:sv.S.hist, lessons:sv.S.lessons, intro:new Set(sv.S.intro)});
    $('#hud').hidden = true; $('#party').innerHTML=''; setBg('den'); runKnot('mo_dau');
    return true;
  }
  story.state.LoadJson(sv.ink);
  S = deserS(sv.S);
  Object.keys(LOCS).forEach(k=>{ LOCS[k].unlocked = (sv.unlocked||[]).includes(k); });
  $('#hud').hidden = !S.inCity; if(S.inCity) drawClock();
  setBg(S.bg || (S.loc && LOCS[S.loc] ? LOCS[S.loc].bg : 'den')); renderLoc();
  if(sv.mode==='dialog' || sv.mode==='choice'){
    D.open = true; D.post = sv.post || []; D.after = sv.after ? AFTER(sv.after.key, sv.after.arg) : null;
    $('#dlg').classList.add('on'); $('#spots').style.visibility='hidden';
    if(sv.line){ const n = S.hist.length; showLine(sv.line.text, sv.line.meta||{}); S.hist.length = n; clearInterval(D.tmr); $('#txt').textContent = D.full; D.typing=false; }
    if(!story.canContinue && story.currentChoices.length) showChoices();
    else if(!sv.line) step();
  } else if(sv.mode==='mg' && sv.mg){
    openMG(sv.mg.kind, sv.mg.ret);
  }
  toast('Đã tải bản lưu');
  return true;
}
const _showChoices = showChoices;
showChoices = function(){ _showChoices(); saveNow(true); };
const _endDialog = endDialog;
endDialog = function(){ _endDialog(); if(S && S.inCity && !S.turtle && !D.open && !MG && !$('#fail').classList.contains('on')) saveNow(true); };
const _showFail = showFail;
showFail = function(type){ _showFail(type); saveNewRun(v('luot')+1, type); };
const _showEnd = showEnd;
showEnd = function(){ _showEnd(); clearSave('auto'); };
/* Đóng trang hay chuyển tab giữa chừng: tự lưu đúng chỗ đang đứng */
addEventListener('pagehide', ()=>saveNow(true));
document.addEventListener('visibilitychange', ()=>{ if(document.visibilityState==='hidden') saveNow(true); });

/* Bảng Lưu / Tải */
function fmtSave(sv){
  const d = new Date(sv.t); const pad = n => String(n).padStart(2,'0');
  const when = `${pad(d.getHours())}:${pad(d.getMinutes())} ngày ${d.getDate()}/${d.getMonth()+1}`;
  return `Lượt ${sv.luot||1} · ${sv.place||'Alexandria'}${sv.drops!=null ? ' · còn '+sv.drops+' giọt nước' : ''} · ${when}`;
}
function openSaves(){
  const fromTitle = $('#title').classList.contains('on');
  const blocked = canSave();
  const row = s => { const sv = readSave(s);
    return `<div class="slot"><div class="sl-name">${s==='auto'?'Tự lưu':'Ô '+s}</div><div class="sl-info">${sv?esc(fmtSave(sv)):'<span class="empty">Trống</span>'}</div><div class="sl-act">
      ${s!=='auto'?`<button class="btn ghost" data-save="${s}" ${blocked?'disabled':''}>Lưu vào đây</button>`:''}
      <button class="btn" data-load="${s}" ${sv?'':'disabled'}>Tải</button></div></div>`; };
  $('#sbody').innerHTML = `<p class="sl-note">${fromTitle?'Chọn một bản lưu để chơi tiếp.':'Game tự lưu khi hiện lựa chọn, sau mỗi đoạn thoại và khi bạn đóng trang. Muốn giữ một mốc riêng thì lưu vào ô 1, 2 hoặc 3.'}</p>${SLOTS.map(row).join('')}`;
  $('#sbody').querySelectorAll('[data-save]').forEach(b=>b.onclick=()=>{
    const s=b.dataset.save;
    if(readSave(s) && b.dataset.arm!=='1'){ b.dataset.arm='1'; b.textContent='Bấm lần nữa để lưu đè'; return; }
    if(saveNow(false, s)) openSaves();
  });
  $('#sbody').querySelectorAll('[data-load]').forEach(b=>b.onclick=()=>{
    if(!fromTitle && b.dataset.arm!=='1'){ b.dataset.arm='1'; b.textContent='Bấm lần nữa để tải'; return; }
    loadSave(b.dataset.load);
  });
  $('#m-save').classList.add('on');
}

/* Màn hình chính: Tiếp tục / Tải game / Chơi mới */
function refreshTitle(){
  const last = latestSave(); const c = $('#b-cont'), n = $('#b-start'), l = $('#b-load');
  c.disabled = !last || !story; l.disabled = !last || !story;
  $('#saveinfo').textContent = last ? 'Bản lưu gần nhất: ' + fmtSave(last.sv) : 'Chưa có bản lưu nào.';
  n.textContent = 'Chơi mới'; n.dataset.arm = '';
  n.className = last ? 'btn ghost' : 'btn'; c.className = last ? 'btn' : 'btn ghost';
}
function showTitle(){ saveNow(true); if(MG) closeMG(); $('#m-save').classList.remove('on'); $('#title').classList.add('on'); refreshTitle(); }

async function boot(){
  fit();
  $('#title').classList.add('on');
  const btn = $('#b-start'), cont = $('#b-cont'); btn.disabled = true; cont.disabled = true; btn.textContent = 'Đang tải...';
  try {
    const src = await fetch('alexandria.ink').then(r=>{ if(!r.ok) throw new Error('Không tải được alexandria.ink'); return r.text(); });
    story = new inkjs.Compiler(src).Compile();
    S = freshState();
    btn.disabled = false; refreshTitle();
  } catch(err) {
    btn.textContent = 'Lỗi tải kịch bản'; console.error(err);
    $('#title p').textContent = 'Không tải được kịch bản của màn chơi. Tải lại trang thử xem.';
    return;
  }
  btn.onclick = () => {
    if(readSave('auto') && btn.dataset.arm !== '1'){ btn.dataset.arm = '1'; btn.textContent = 'Bấm lần nữa: bắt đầu lại từ đầu'; setTimeout(()=>{ if(btn.dataset.arm==='1') refreshTitle(); }, 4000); return; }
    clearSave('auto'); $('#title').classList.remove('on'); if(MG) closeMG(); clearInterval(D.tmr); D.open=false; D.choices=false; $('#dlg').classList.remove('on'); $('#choices').innerHTML='';
    story.ResetState(); S = freshState({intro:S?.intro}); D.open=false; $('#hud').hidden = true; $('#party').innerHTML='';
    setBg('den'); runKnot('mo_dau');
  };
  cont.onclick = () => { if(!cont.disabled) loadSave(); };
  $('#b-save').onclick = () => openSaves();
  $('#b-load').onclick = () => { if(!$('#b-load').disabled) openSaves(); };
  $('#mg-save').onclick = () => openSaves();
  $('#b-menu').onclick = () => showTitle();
}
boot();
