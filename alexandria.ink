// ==========================================================
//  MÀN 1 · NGỌN LỬA Ở ALEXANDRIA
//  Kịch bản ink. Mở được bằng Inky để sửa.
//
//  Quy ước cho người viết:
//  - "Tên: lời thoại"      nhân vật nói. Tên phải có trong danh sách nhân vật của game.
//  - "Nhật Anh (nghĩ): ..." suy nghĩ của Nhật Anh.
//  - Dòng không có tên     lời kể.
//  - # p:ten_anh           đổi chân dung (trùng tên file ảnh, vd nikanor_hien).
//  - # advice              dòng góp ý của Phúc hoặc Nguyệt, hiện thành bong bóng.
//  - # time:2              tốn 2 giọt nước.
//  - # ev:e_kho            thêm vật chứng vào sổ.
//  - # note:n_id           thêm ghi chú vào sổ (nội dung ghi chú nằm trong game.js, mục NOTES).
//  - # loc:nha_lys         mở địa điểm mới trên bản đồ.
//  - # go:phong_doc        chuyển cảnh sang địa điểm khác (tốn 1 giọt).
//  - # scene:ben_dong      đổi ảnh nền ngay giữa đoạn thoại.
//  - # mg:ke>doc_ke_xong   mở minigame, xong thì chạy knot sau dấu >.
//  - # intro:theo          từ dòng này người chơi biết tên nhân vật (trước đó bảng tên hiện "Ông già", "Vị tư tế"...).
//  - # city / # turtle / # lose:loai / # win    các mốc lớn của màn.
// ==========================================================

VAR luot = 1
VAR nghe_dien_van = false
VAR gap_be = false
VAR gap_nik = false
VAR bi_chan_hanh_lang = false
VAR uong_tra = false
VAR di_do_dam_dong = false
VAR lys = 0
VAR mo_nha_lys = false
VAR mo_ben_dong = false
VAR thay_myrto = false
VAR myrto = 0
VAR gap_rufus = false
VAR rufus_hua = false
VAR dorion = 0
VAR biet_luat = false
VAR co_e_kho = false
VAR co_e_hanh_lang = false
VAR co_e_ke = false
VAR co_e_pin = false
VAR co_e_day = false
VAR co_e_myrto = false
VAR co_e_rufus = false
VAR co_e_ruong = false
VAR co_e_hop = false
VAR loai_thua = ""
VAR ngoi_cho = false
VAR goi_y_day = false

-> DONE

// ==========================================================
//  ĐỀN CÁC NÀNG MUSE
// ==========================================================
=== mo_dau ===
{luot > 1: -> mo_dau_lai}
Nhật Anh mở mắt ra, và điều đầu tiên cô cảm thấy là nắng, một thứ nắng trắng và khô đổ xuống từ bầu trời xanh, hắt lên những phiến đá vôi vỡ vụn dưới chân rồi dội thẳng vào mắt.
Cô đưa tay lên che, rồi khựng lại, vì cô cảm thấy được hơi nóng của nắng trên mu bàn tay. Cô đã chơi đủ loại game, từ game trên điện thoại tới những bộ kính thực tế ảo đắt tiền ở hội chợ công nghệ, nhưng chưa có game nào làm da cô nóng lên được. # p:na_che_nang
Nhật Anh: Vào được rồi! # p:na_ngac
Cô cúi xuống, ấn lòng bàn tay lên mặt đá. Đá nóng ran, và một cạnh vỡ sắc cứa vào da, đủ để cô rụt tay lại. Trên lòng bàn tay hiện lên một vết hằn đỏ. Cô cứ nhìn nó mãi, vì nó rát y như lần cô vấp ngã ngoài sân trường.
Bên cạnh cô, Phúc đang vẫy tay vào khoảng không trước mặt, chụm hai ngón tay lại rồi kéo ra, vuốt sang trái, vuốt sang phải, như đang cố mở một cái menu vô hình. Không có gì hiện lên cả.
Phúc: Không có menu. Không có thanh máu, không có bản đồ. Game gì mà không có giao diện?
Nguyệt thì đã ngồi xổm xuống từ lúc nào, miết ngón tay lên một phiến đá, chờ bụi bay ra rồi đưa lên mũi ngửi.
Nguyệt: Có mùi đá nóng và mùi bụi, giống hệt đá ngoài đời. Chưa có thiết bị nào làm được tới mức này.
Nghe tới chữ "thiết bị", Phúc đưa tay lên mặt theo phản xạ, định đẩy gọng kính cho ngay ngắn, nhưng ngón tay cậu chỉ chạm vào sống mũi. Nhật Anh sờ lên mi mắt, chỗ đáng lẽ phải có miếng che mắt cô đeo trước khi ngủ, nhưng cũng không thấy gì. Nguyệt chạm lên trán, và chiếc băng đeo trán của cô cũng không còn.
Phúc: Trời ơi, mọi vật xung quanh đều giống y ngoài đời. Đến cả cái kính cũng mất luôn.
Câu của Phúc làm cả ba cùng ngẩng lên, lần đầu tiên nhìn cho kỹ nơi mình đang đứng.
Họ đứng giữa những gì còn sót lại của một sân đền. Mái đã sập gần hết, chỉ còn vài thanh xà đá gác chênh vênh trên đầu cột, và nắng rơi qua những khoảng trống thành từng mảng lớn trên nền đá. Ở đâu đó bên ngoài bức tường, ve kêu ran. Nguyệt đứng dậy, bước tới cây cột gần nhất, gõ khớp ngón tay lên thân cột nghe tiếng đá đặc, rồi lần theo những đường rãnh chạy dọc từ chân cột lên tới chỗ cao nhất tay cô với tới.
Nguyệt: Đá vôi. Cột tròn có rãnh dọc, kiểu Hy Lạp cổ. Mòn tới mức này thì phải hơn hai nghìn năm.
Phúc: Cô Oliveira bảo game về lịch sử, ai ngờ lịch sử thật tới mức này.
Phúc đi vòng quanh cây cột, gõ thử như Nguyệt vừa làm, rồi gõ thêm lần nữa vì không tin vào tai mình. Trong lúc đó, Nhật Anh nhìn khắp sân. Cô biết game nào cũng vậy: nhiệm vụ đầu tiên luôn được giấu ở thứ lạ nhất trong phòng, và người chơi nào tìm ra nó trước thì được đi trước.
Thứ lạ nhất ở đây là mười cái bệ đá xếp thành vòng cung. Chín cái cao bằng nhau, một cái thấp hơn đặt ở giữa, và cả mười cùng quay về một điểm giữa sân, như mười người đang đứng nhìn chung một thứ. Cô đi một vòng quanh dãy bệ. Mặt trên của bệ nào cũng sạch và nhẵn hơn hẳn phần thân, như đã có thứ gì đó che lên nó rất lâu, giữ cho mưa nắng không chạm tới.
Nhật Anh: Mười cái bệ mà không có bức tượng nào. Chỗ này từng đặt thứ gì quan trọng lắm, rồi người ta mang đi hết.
Cô dừng lại trước bệ đầu tiên, vì bệ này không trống hẳn. Trên mặt đá có bóng một người phụ nữ đứng, tay cầm cuộn giấy mở dở, mờ như hơi nước đọng trên mặt kính. Nhật Anh nhìn xuyên qua được nó, thấy cả cây cột phía sau.
Nhật Anh: Ơ, hai người lại đây coi.
Phúc chạy lại trước, đưa tay định chạm vào bóng tượng, và bàn tay cậu đi xuyên qua nó như đi qua một làn khói. Cậu giật tay về, chưa kịp kêu lên thì đã có tiếng người nói sau lưng cả ba.
Theophrastus: Ồ, lâu lắm mới thấy người mới xuất hiện trong ngôi đền. Các vị là ai, và có hứng thú gì với những bệ đá này? # p:theo_hien
Cả ba quay phắt lại. Trên bậc đá trong bóng một cây cột, một ông già cao gầy đang ngồi, tấm vải màu kem vắt qua vai, râu tóc bạc trắng cắt gọn gàng, hai bàn tay gầy đặt trên đầu gối. Ông ngồi yên tới mức bóng ông lẫn vào bóng cột. Nhật Anh đoán ông đã ở đó từ lâu, trước cả khi ba người mở mắt, và đã nghe hết những gì họ vừa nói.
Phúc ghé sát tai Nhật Anh.
Phúc: NPC kìa. # p:phuc_thi_tham
Nhật Anh: Suỵt. Ổng nghe thấy đó. # p:na_ngac
Cô huých nhẹ khuỷu tay vào sườn Phúc, rồi bước lên trước một bước. Ông già nhìn cô, không vội vàng gì, như thể ông có cả buổi chiều để chờ cô trả lời.
Nhật Anh: Dạ, con là Nhật Anh, đây là Phúc, còn đây là Nguyệt. Tụi con tới từ xa lắm, khó giải thích lắm ạ.
Theophrastus: Ai lạc tới đây cũng tới từ rất xa. Ta là Theophrastus. # intro:theo
Nhật Anh: Vậy đây là đâu ạ?
Theophrastus: Đây là Athens, trong khu vườn của trường Lykeion, nơi thầy ta là Aristotle từng dạy học. Ngôi đền này do ta dựng.
Ông chống tay lên gối đứng dậy, khớp gối kêu lên một tiếng khô, rồi chậm rãi đi về phía dãy bệ. Ba người đi theo sau ông. Phúc đi cuối cùng, vẫn còn lén nhìn bàn tay vừa đi xuyên qua bóng tượng.
Theophrastus: Lúc nãy cô bé đoán gần đúng. Nơi này từng đặt những thứ quý nhất của ta. Chỉ sai một chỗ: không ai mang các bức tượng đi cả. Các bức tượng tự rời đi.
Ông dừng lại ở bệ đầu tiên, cạnh bóng tượng mờ, và nhìn nó một lúc trước khi nói tiếp.
Theophrastus: Đây là đền thờ chín nàng Muse. Mỗi nàng giữ một loại hiểu biết của con người. Nàng này là Clio, nàng giữ những chuyện đã xảy ra.
Theophrastus: Mỗi khi người ta tin một câu chuyện sai về chuyện đã xảy ra, tượng của nàng mờ đi một chút. Khi cả thế giới cùng tin, nàng rời bệ. Tám nàng kia cũng đã rời đi theo cách ấy, từng nàng một. Clio là người cuối cùng còn ở lại.
Nguyệt: Tượng đá không tự đi được ạ.
Theophrastus không cãi. Ông chỉ đưa tay về phía bóng tượng, rồi đứng chờ. Nguyệt bước lại gần, nghiêng đầu nhìn cây cột phía sau qua thân bóng tượng, đưa tay ra rồi lại rụt về giữa chừng. Cô lùi lại một bước và không nói gì thêm.
Phúc: Còn cái bệ thấp ở giữa thì sao ạ?
Theophrastus: Đó là chỗ của thầy ta. Thầy dạy người ta cách phân biệt một lập luận đúng với một lập luận sai. Khi không còn ai cần biết chuyện gì là thật, thì cũng không còn ai cần cách ấy nữa. Tượng thầy đi theo các nàng.
Ông đặt bàn tay lên mặt bệ thấp, giữ yên ở đó.
Theophrastus: Trước khi thầy mất, ta đã hứa sẽ giữ chỗ này cho thầy. Muốn thầy về lại chỗ của mình, các nàng phải về trước. Mỗi lần có người lật lại một lời dối cho đúng, một nàng lại tìm được đường về gần thêm một bước. # p:theo_tram
Nguyệt: Vậy sao ông biết lời dối ở đâu mà lật lại?
Theophrastus: Mỗi lần Clio mờ đi, mặt đá dưới chân nàng lại hiện lên nơi chuyện ấy đang xảy ra. # p:theo_hien
Ông nghiêng người sang một bên cho ba người nhìn. Dưới chân bóng tượng, mặt bệ không còn là đá nữa mà phẳng và sẫm như mặt nước giếng. Trên đó, khói xám bốc lên từ một bến cảng đông thuyền, và sau làn khói là những dãy nhà mái bằng trắng chạy dài theo bờ biển.
Nhật Anh nhìn mặt bệ, rồi nhìn đôi chân gầy của ông dưới vạt vải.
Nhật Anh: Sao ông không tự đi ạ?
Theophrastus: Ta già rồi. Chân ta không còn đi tới những nơi ấy được nữa. # p:theo_tram
Nguyệt rời mắt khỏi mặt bệ, phủi bụi đá còn dính trên ngón tay. Với Nguyệt, một nhiệm vụ cần phải có đường đi.
Nguyệt: Vậy tụi con phải làm gì?
Theophrastus: Các cháu sẽ tới thư viện Alexandria, ở Ai Cập, vào năm 48 trước Công nguyên. Học trò của ta là Demetrius từng góp tay dựng nên nó, để cất giữ những chuyện đã xảy ra của cả thế giới. # p:theo_hien
Theophrastus: Đêm trước khi các cháu tới, thành ấy vừa có một đám cháy, và cả thành đang nói với nhau rằng thư viện đã cháy rụi. Clio mờ đi đúng vào đêm người ta bắt đầu nói câu ấy. Vì thế ta nghĩ ở nơi các cháu sắp tới, có một kẻ đang dùng lời lẽ sai để dắt mũi cả thành tin vào câu chuyện đó.
Theophrastus: Việc của các cháu là đi khắp thành, nhìn tận mắt, hỏi chuyện người ở đó, đo đếm những gì đếm được, và ghi hết vào sổ. Đừng tin một câu chỉ vì nhiều người cùng nói nó.
Nguyệt: Có giới hạn thời gian không ạ?
Theophrastus: Từ lúc các cháu tới nơi cho tới khi mặt trời lặn. Trước cổng thư viện có một chiếc đồng hồ nước. Nhìn nó mà biết mình còn bao nhiêu thời gian. Mỗi lần các cháu đi từ chỗ này sang chỗ khác, nước lại cạn thêm một ít.
Theophrastus: Khi mặt trời lặn, một con rùa thần sẽ nổi lên ở hồ nước trong sân thư viện. Các cháu viết lên mai nó tên kẻ đã dắt mũi cả thành. Chỉ được viết một lần.
Phúc: Lỡ tụi con viết sai thì sao ạ?
Theophrastus: Thì người các cháu chỉ tay sẽ phải chịu tội thay, còn kẻ thật sự thì thoát.
Phúc: Nhưng đó chỉ là NPC mà.
Theophrastus không trả lời. Ông nhìn Phúc lâu tới mức Phúc phải quay đi chỗ khác. Nhật Anh nhìn xuống vết hằn đỏ vẫn còn trên lòng bàn tay mình. Cô không còn chắc những người sống trong thành ấy chỉ là nhân vật do máy dựng ra.
Theophrastus: Còn các cháu sẽ bị kéo về đây, và tên các cháu được khắc lên tấm bảng đá ngoài cổng, cùng với những người đã sai trước các cháu. Đêm sau các cháu mới được quay lại, và mọi chuyện ở thành ấy bắt đầu lại từ đầu. # p:theo_tram
Phúc nuốt khan. Nhật Anh thấy cậu đưa mắt về phía cổng đền, như đang tìm xem tấm bảng đá ấy nằm ở đâu.
Theophrastus: Nếu viết đúng, việc vẫn chưa xong. Các cháu là khách, mà khách thì không được xử án nhà người ta. Các cháu phải tìm người ở đó có quyền xét xử, đưa cho người ấy đủ bằng chứng, để chính người của thành ấy vạch mặt hắn. # p:theo_hien # note:n_dan
Ông vừa nói dứt câu thì khói trên mặt bệ dâng lên rồi tràn ra khỏi mặt đá. Giữa hai cây cột phía nam, không khí gợn lên như mặt nước vừa bị thả một hòn sỏi. Theo gió ùa sang là mùi khói thật, mùi gỗ cháy lẫn với mùi muối biển, và xa xa có tiếng người gọi nhau bằng một thứ tiếng cả ba chưa từng nghe.
Ba người nhìn nhau.
Nguyệt: Rồi tụi con về bằng cách nào ạ?
Theophrastus: Khi mọi chuyện ở thành ấy đã ngã ngũ, dù các cháu viết đúng hay sai, các cháu cũng sẽ về đây. Ta đợi các cháu.
Phúc: Vào game rồi thì phải chơi chứ.
Cậu nói to hơn cần thiết, và Nhật Anh biết cậu đang tự trấn an. Cô siết bàn tay còn rát lại, hít một hơi, rồi bước qua lớp không khí gợn sóng trước. Phúc và Nguyệt theo ngay sau. # city
-> DONE

=== mo_dau_lai ===
Lại là thứ nắng trắng và khô ấy, lại là mười cái bệ đá xếp thành vòng cung. Trên bệ đầu tiên, bóng tượng Clio trông mờ hơn lần trước, mờ tới mức Nhật Anh phải nhìn một lúc mới thấy cuộn giấy trong tay nàng.
Theophrastus ngồi trên bậc đá trong bóng cột, đúng chỗ cũ, như thể ông chưa từng đứng dậy.
Theophrastus: Các cháu về rồi. # p:theo_tram
Không ai trả lời ngay. Phúc đứng sau lưng Nhật Anh, tay đút túi quần, mắt nhìn xuống mũi giày.
{loai_thua == "rufus": Theophrastus: Các cháu viết tên người đã tự nhận đốt thuyền. Ông ta nhận đốt thuyền, và chỉ nhận có thế. Còn sách thì mất đi đâu, các cháu chưa hỏi cho tới nơi.}
{loai_thua == "myrto": Theophrastus: Các cháu viết tên người mang sách ra khỏi thư viện. Sách trong giỏ cô ấy không cháy. Vậy những cuốn còn lại mất vì lửa, hay vì một thứ khác?}
{loai_thua == "dorion" or loai_thua == "ga": Theophrastus: Các cháu chọn người đứng gần chỗ có chuyện. Nhưng đứng gần chưa phải là làm. Các cháu có thấy người ấy làm gì đâu.}
{loai_thua == "khong_doi_chat": Theophrastus: Các cháu viết đúng tên. Nhưng không ai ở thành ấy chịu đứng ra nói cái tên ấy cùng các cháu, vì người có quyền xét xử chưa từng tin các cháu.}
{loai_thua == "thieu_chung": Theophrastus: Các cháu viết đúng tên, và đã được đứng trước người xét xử. Nhưng hắn còn nói những câu các cháu chưa có gì để đặt cạnh.}
{loai_thua == "rufus" or loai_thua == "myrto" or loai_thua == "dorion" or loai_thua == "ga": Phúc: Lần này con không gọi ai là NPC nữa. # p:phuc_lo}
Theophrastus: Thành ấy sẽ bắt đầu lại từ đầu. Người ở đó sẽ nói lại đúng những câu họ đã nói, đi lại đúng những đường họ đã đi. Chỉ có các cháu là nhớ. # p:theo_hien # note:n_dan
Khói lại dâng lên từ mặt bệ, và không khí giữa hai cây cột phía nam lại gợn sóng. Lần này Nhật Anh không chờ ai. Cô bước qua trước, và nghe tiếng chân hai người kia theo ngay sau. # city
-> DONE

// ==========================================================
//  CỔNG MOUSEION
// ==========================================================
=== den_noi ===
Lớp không khí gợn sóng khép lại sau lưng ba người, và Alexandria ập vào họ bằng mùi trước tiên: mùi nhựa đường cháy khét, lẫn mùi muối biển và mùi cá ươn, đặc tới mức Nhật Anh có cảm giác cắn được nó. # scene:ben_tay
Ba người đứng trên một bến đá. Dưới chân, mặt nước đục ngầu lềnh bềnh những mảng gỗ đen. Xa hơn một chút, xác những con thuyền chỉ còn trơ khung sườn chổng lên khỏi mặt nước như những bộ xương cá. Đây là bến cảng cô vừa thấy bốc khói trên mặt bệ đá. Giờ nó ở ngay trước mặt, và khói vẫn còn vương thành từng dải mỏng trên mặt nước.
Trên bến, người ta chạy qua chạy lại, gánh nước, kéo lưới. Một người đàn bà ngồi bệt bên đống gỗ cháy mà khóc. Hai người đàn ông cãi nhau, tay chỉ ra biển. Họ nói bằng chính thứ tiếng cả ba vừa nghe vọng qua cổng. Lạ là Nhật Anh hiểu được hết.
Phúc: Game có phụ đề luôn, mà phụ đề nằm sẵn trong đầu mình.
Cậu nói đùa, nhưng giọng nhỏ hơn mọi khi. Cậu đứng nép sát vào Nhật Anh, nhường đường cho một ông già gánh hai thùng nước đi qua, và lí nhí xin lỗi dù người ta không nghe.
Nguyệt không nhìn người. Cô nhìn những tòa nhà. Phía sau bến, sâu trong thành, là một quần thể tòa nhà đá trắng có hàng hiên cột dài, lớn hơn mọi thứ xung quanh. Một góc mái phía gần cảng đã ám đen, còn phần lớn vẫn trắng, như chưa từng có chuyện gì.
Nguyệt: Ông Theophrastus bảo cả thành đang nói thư viện cháy rụi. Nếu kia là thư viện thì nó đâu có cháy rụi. Mới đen có một góc.
Nhật Anh: Thì mình tới đó xem.
Không cần ai dẫn đường. Đám đông trên bến đang dồn cả về phía tòa nhà ấy, và ba người chỉ việc đi theo họ.
Trước cổng có một cái giá đồng cao bằng người, xếp chồng ba cái bát đồng, cái trên nhỏ giọt xuống cái dưới. Nhật Anh nhận ra nó ngay: chiếc đồng hồ nước ông Theophrastus đã nói. Cạnh đó, một cậu bé đầy tớ chừng mười tuổi, chân đất, đang kiễng chân đổ một gáo nước vào bát trên cùng. # scene:cong
Thấy ba bộ quần áo lạ hoắc, cậu bé quên cả đổ nước. Cậu nheo mắt nhìn từ đôi giày thể thao của Phúc lên tới mái tóc rối của Nhật Anh.
Cậu bé: Khách lạ hả? Đây là Mouseion, nhà của các nàng Muse. Thư viện nằm bên trong đó. # p:be_dau_to
~ gap_be = true
Cậu chĩa cái gáo về phía cái bát dưới cùng.
Cậu bé: Bát cuối cạn là lúc mặt trời lặn. Ai có điều gì muốn thưa với ngài tư tế thì thưa trước lúc ấy. Hết giờ là ngài đóng cửa, không tiếp ai nữa.
Nhật Anh (nghĩ): Nhà của các nàng Muse. Cũng là những nàng ông Theophrastus đang ngồi chờ.
Nguyệt liếc chiếc đồng hồ trên cổ tay. Màn hình trắng trơn, không giờ, không số. Cô chặc lưỡi, rồi đứng yên trước cái bát đồng, mắt dõi theo từng giọt nước, môi mấp máy đếm trong mười nhịp thở.
Nguyệt: Ông Theophrastus nói mỗi lần đi từ chỗ này sang chỗ khác là nước cạn thêm một ít. Với chỗ nước này, tụi mình đi được chừng mười sáu lần. # advice
Phúc: Mười sáu lần cho cả một thành phố?
Chưa ai kịp đáp thì đám đông đã ồn lên. Trên bậc thềm, một người đàn ông trung niên mặc áo trắng viền xanh bước ra, tay đeo nhẫn vàng, mắt đỏ hoe như vừa thức trắng. Ông ta đứng ở bậc trên cùng, đợi tiếng ồn lắng xuống, rồi mới giơ hai tay lên.
{luot > 1: Nhật Anh nhận ra ông ta trước cả khi ông ta mở miệng. Cùng cái áo, cùng cái nhẫn, cùng cái cách giơ hai tay lên.}
Nikanor: Tôi là Nikanor, thủ quỹ của Mouseion. Đêm qua tôi ở đây, tôi nhìn thấy tất cả. # p:nikanor_buon # intro:nikanor
Nikanor: Caesar đã đốt thuyền, và lửa của Caesar đã đốt sạch thư viện. Bốn trăm nghìn cuộn sách. Ba trăm năm gom góp của cả thế giới. Cháy trong một đêm.
{luot == 1: Giọng ông ta vỡ ra ở chữ "tất cả". Người đàn bà đứng cạnh Nhật Anh đưa tay lên bịt miệng. Nhật Anh thấy cổ họng mình cũng nghẹn lại, dù cô chưa từng đọc một cuộn sách nào trong cái thư viện ấy.}
{luot > 1: Giọng ông ta vỡ ra đúng ở chữ "tất cả", và dừng đúng một nhịp thở, như lần trước. Lần trước Nhật Anh thấy thương. Lần này cô chỉ thấy nó giống một đoạn thoại đã được tập.}
~ nghe_dien_van = true
~ gap_nik = true
Từ cuối đám đông có người hô tên Caesar. Cái tên lan đi từ miệng này sang miệng khác như lửa cháy đêm qua, mỗi lúc một to, cho tới khi cả sân trước cổng cùng hô. # note:n_dien_van
Nhật Anh (nghĩ): Đây rồi. Câu chuyện cả thành đang nói với nhau, và người kể nó to nhất đang đứng trên bậc thềm.
Nikanor giơ tay chỉ về phía những chiếc lều đỏ dựng sát bờ biển. Gió cướp mất nửa câu, chỉ còn lại hai chữ "La Mã" và "tại đó". Đám đông trào đi.
Người phía sau xô vào lưng, và chân Nhật Anh đã bước theo trước khi đầu cô kịp quyết định. Nguyệt nắm lấy tay áo cô, giật lại.
Nguyệt: Ông ta nói ông ta thấy tất cả. Còn tụi mình thì từ lúc tới đây chưa thấy được gì. # p:nguyet_mia
Phúc đứng nép vào cột cổng cho khỏi bị cuốn đi, mắt vẫn dõi theo người đàn ông áo trắng.
{luot == 1: Phúc: Ông ấy là người giữ tiền của cả cái nơi này. Muốn biết thì hỏi ông ấy trước có phải nhanh hơn không? # advice}
{luot == 1: Nguyệt: Hoặc đi xem chỗ có vật chứng. Đống khói ở dãy kho ngoài cảng kia kìa. Đếm được, đo được. # advice}
Nhật Anh nhìn cái bát đồng. Một giọt nước nữa vừa rơi.
{luot == 1: Nhật Anh (nghĩ): Mười sáu lần đi. Mình phải chọn đi đâu trước.}
{luot > 1: Nhật Anh (nghĩ): Vẫn mười sáu lần đi. Nhưng lần này mình biết những chỗ nào lần trước mình đã bỏ qua. # p:na_quyet}
-> DONE

=== cong_be ===
Cậu bé vừa đổ xong gáo nước thì thấy ba người quay lại. Cậu chùi tay vào vạt áo.
Cậu bé: Lại là các người. Nước vẫn nhỏ, tôi vẫn đổ. Hết bát cuối là hết ngày. # p:be_dau_to
{luot > 1: Cậu bé: Ơ, sao cô nhìn tôi như đã biết tôi định nói gì vậy?}
* [Hỏi về đêm qua]
    Nhật Anh ngồi xổm xuống cho ngang tầm mắt cậu bé.
    Nhật Anh: Đêm qua em ở đâu?
    Cậu bé: Đêm qua á? Lửa ở cảng phía tây sáng rực cả trời. Ai cũng chạy ra bến tây xem. Tôi cũng chạy. Tôi trèo lên mái kho muối, thấy cả cái cột buồm cháy đổ ùm xuống nước. # p:be_dau_to
    Kể tới đó, mắt cậu sáng lên như đang kể chuyện đi xem hội. Rồi cậu chợt nhớ ra mình đang đứng trước cổng thư viện, và cụp mắt xuống.
    Cậu bé: Có mỗi ông thủ quỹ là bảo ông ấy ở lại với thư viện cả đêm.
    Nhật Anh (nghĩ): Cả thành chạy ra bến tây, chỉ có một người ở lại. Vậy chuyện trong thư viện đêm qua, cả thành chỉ có lời của một người.
    -> DONE
+ [Thôi, không có gì]
    Cậu bé nhún vai, quay lại với cái gáo.
    -> DONE

=== cong_nik ===
{bi_chan_hanh_lang: -> cong_nik_sau}
Nikanor bước xuống bậc thềm. Những người còn lại tự rẽ ra cho ông ta đi, như nước rẽ quanh mũi thuyền. Vài người cúi đầu chào. Một bà cụ níu vạt áo ông mà khóc, ông vỗ nhẹ lên tay bà rồi gỡ ra. Ông ta dừng lại trước ba người lạ mặt, nhìn từ đôi giày thể thao của Phúc lên tới chiếc đồng hồ trên tay Nguyệt, và dừng lâu hơn một chút ở chiếc đồng hồ.
Nikanor: Khách đường xa. Các vị tới đúng ngày đau lòng nhất của thành này. Muốn biết chuyện gì đã xảy ra, cứ hỏi tôi. # p:nikanor_hien
Phúc cúi đầu chào lại, theo phản xạ của một đứa được dạy phải lễ phép với người lớn.
- (hoi)
* [Hỏi chuyện đêm qua]
    Nhật Anh: Đêm qua lửa cháy thế nào ạ?
    Nikanor: Lính La Mã đốt thuyền trong cảng. Gió đẩy lửa vào bờ. Lửa liếm sang kho, sang thư viện. Tôi đứng đây, tôi nhìn thấy hết. # p:nikanor_buon
    Ông ta nói một mạch, không ngập ngừng chỗ nào, rồi nhìn ra phía cảng, như thể ngọn lửa vẫn còn ở đó.
    -> hoi
* [Hỏi vì sao lại là bốn trăm nghìn cuộn]
    Nguyệt: Bốn trăm nghìn là ông đếm, hay ông ước?
    Nikanor mỉm cười, kiểu cười của người lớn trước một đứa trẻ hỏi chuyện người lớn. # p:nikanor_hien
    Nikanor: Sổ sách là việc của tôi, cô bé. Từng cuộn ra vào thư viện đều qua tay tôi.
    Nguyệt: Người giữ sổ thì biết số. Nghe hợp lý. # advice
    -> hoi
* [Hỏi có vào xem bên trong thư viện được không]
    Nhật Anh: Tụi con vào xem bên trong được không ạ?
    Nikanor: Phòng đọc đóng cửa rồi. Khói từ kho tràn sang cả đêm, hít vào là đau phổi cả tuần. # p:nikanor_lanh
    Ông ta đặt tay lên vai Phúc, đứa đứng gần nhất, và giọng dịu xuống.
    Nikanor: Tôi không muốn khách của thành mình phải chịu thêm chuyện gì nữa. # p:nikanor_hien
    -> hoi
+ [Cảm ơn ông]
    Nikanor gật đầu, rồi quay lại bậc thềm, nơi một nhóm người khác đang chờ ông ta.
    -> DONE

=== cong_nik_sau ===
{uong_tra: Nikanor: Cảm ơn các vị lần nữa. Thành này cần những người khách như các vị. # p:nikanor_hien}
{not uong_tra: Nikanor gật đầu với ba người, lịch sự, ngắn gọn, rồi quay đi nói chuyện với người khác. # p:nikanor_lanh}
-> DONE

=== cong_ga ===
Ba người còn đang đứng nhìn về phía đống khói ngoài cảng thì một gã gầy mặc áo ngắn màu nâu chen vào giữa, như đã đứng sẵn cạnh họ từ lúc nào. Người gã có mùi rượu chua. # p:ga_ao_nau
Gã áo nâu: Hỏi gì mà hỏi, muốn biết sự thật thì ra kho mà xem. Sách còn nằm đó, cháy thành than, ai nhìn cũng thấy. # p:ga_ao_nau
Gã nói xong không đợi ai trả lời, đã lách sang một nhóm khách khác và nói lại y câu ấy.
{luot == 1: Nguyệt: Vật chứng, ở một chỗ cụ thể, đo đếm được. Tớ muốn đi. # advice}
{luot > 1 and co_e_kho == false: Nguyệt: Lần này tớ đi đo thật. # advice}
-> DONE

=== cong_dam_dong ===
Ba người đứng lẫn vào số người còn lại dưới bậc thềm, những người không chạy theo ra trại La Mã. Người ta nói với nhau bằng đủ thứ giọng, ai cũng chắc chắn như chính mắt mình đã thấy.
Một người bán cá, tay còn cầm con dao: "Người ta bảo lửa cháy từ trong thư viện ra, chứ không phải từ cảng vào."
Một bà cụ đếm trên đầu ngón tay: "Bốn trăm nghìn! Có khi còn hơn, ông thủ quỹ còn nói bớt cho đỡ đau lòng."
Một gã thanh niên vai u thịt bắp: "Tôi nghe lính La Mã đốt cố ý, để trả thù vua ta."
Phúc: Ba người, ba kiểu. Mà ai cũng chắc.
Nhật Anh (nghĩ): Người nào cũng mở đầu bằng "người ta bảo", "tôi nghe". Đêm qua không ai trong số họ đứng trong thư viện. Họ đứng ở bến tây, nhìn lửa.
-> DONE

=== cong_to ===
Nikanor lại đứng trên bậc thềm, trước một đám đông mới, kể lại chuyện lửa của Caesar, từng chữ như lúc sáng. Giọng ông ta vẫn vỡ ra đúng chỗ cũ. Lần này Nhật Anh nghe mà máu dồn lên mặt, vì cô đã biết những thứ đám đông chưa biết. # p:na_gian
* [Bước lên bậc thềm, tố Nikanor trước đám đông]
    Cô bước lên một bậc. Hai bậc. Miệng cô đã mở ra.
    {lys >= 2 and not mo_nha_lys:
        Một bàn tay già, khô như cành củi, nắm lấy cổ tay cô. Ông lão ôm hộp gỗ đã từ hiên cột ra đứng sau lưng cô từ lúc nào, thở dốc như vừa đi vội.
        Lysandros: Đừng, con bé. Ở thành này, người ngoại kiều không có quyền buộc tội ai. Con mà nói ra bây giờ, họ sẽ bắt con, chứ không bắt hắn. # p:lysandros_giu
        Lysandros: Chỉ có ngài tư tế mới được triệu tập một phiên đối chất.
    - else:
        Phúc chộp lấy vai cô kéo lại, vừa lúc một người lính gác của Mouseion bước tới chắn ngang, ngọn giáo dựng thẳng giữa cô và bậc thềm.
        Lính gác: Ngoại kiều thì đứng yên. Ở đây người ngoài không được buộc tội ai. Muốn đối chất thì phải có ngài tư tế cho phép.
    }
    ~ biet_luat = true
    Nhật Anh lùi xuống. Tay cô run, không biết vì sợ hay vì giận.
    Nhật Anh (nghĩ): Ông Theophrastus đã dặn rồi: khách thì không được xử án nhà người ta. Mình nghe, nhưng tới lúc giận thì quên mất. # note:n_luat
    -> DONE
+ [Thôi, chưa phải lúc]
    -> DONE

// ==========================================================
//  HIÊN CỘT · LYSANDROS · HÀNH LANG
// ==========================================================
=== hien_lys ===
{lys == 0: -> lys_lan_dau}
{lys == 1: -> lys_lan_hai}
{lys == 2: -> lys_than}
{lys >= 3: -> lys_goi}

= lys_goi
{co_e_hop: -> lys_da_mo}
Vừa thấy ba người bước vào hiên, Lysandros đã vẫy tay gọi lại gần. Ông nhìn quanh một lượt, ngó cả về phía hành lang, như sợ có ai nghe. # p:lysandros_om_hop
Lysandros: Lúc nãy ta thấy rồi. Thủ quỹ mời trà, các cháu không uống.
Lysandros: Ở thành này, người từ chối được chén trà của ông ta không nhiều.
Phúc gãi gáy, không biết nên thấy tự hào hay thấy có lỗi.
-> lys_mo_hop

= lys_lan_dau
Hiên cột chạy dọc một bên sân Mouseion, mát hơn hẳn ngoài nắng. Dưới hiên, những người không đủ sức chen ra trại La Mã ngồi bệt trên bậc đá: một người mẹ bế con, mấy cậu học trò ôm bảng sáp, một người chép sách đang lấy móng tay cạy vệt mực khô trên ngón tay. Ai cũng nhìn ra phía cổng, nơi tiếng hô tên Caesar vẫn còn vọng vào.
Chỉ có một ông lão là không nhìn ra cổng. Ông ngồi một mình ở cuối hiên, lưng dựa vào cột, hai tay ôm cái hộp gỗ nhỏ trong lòng như ôm một đứa cháu. Râu ông bạc, áo đã sờn ở hai cổ tay. Ông nhìn xuống nền đá, môi mấp máy, đủ to để người đi ngang nghe thấy. # p:lysandros_om_hop
Lysandros: Người ta khóc cho thư viện như thể nó mới chết đêm qua.
Nhật Anh dừng chân. Cả cái sân đang khóc cho một đêm, chỉ có ông cụ này nói tới chuyện khác.
Phúc: Ông cụ có vẻ không muốn bị làm phiền. Mình ngồi xuống cạnh ông trước đã, đừng hỏi dồn. # advice
* [Hỏi thẳng: "Ông nói vậy là sao ạ?"]
    Ông lão ngẩng lên, nhìn Nhật Anh từ đầu tới chân, rồi nhìn sang hai đứa phía sau. Ánh mắt ông dừng ở đôi giày thể thao của Phúc lâu hơn một chút.
    Lysandros: Là sao thì liên quan gì tới người lạ. # p:lysandros_om_hop
    Ông ôm cái hộp chặt hơn và quay mặt vào cột.
    ~ lys = 1
    -> DONE
* [Ngồi xuống bậc đá cạnh ông, giữ một khoảng cách lịch sự]
    -> lys_ngoi

= lys_lan_hai
Ông lão vẫn ngồi ở cuối hiên, vẫn ôm cái hộp. Thấy ba người quay lại, ông xoay hẳn lưng về phía họ, và lần này không lẩm bẩm gì nữa. # p:lysandros_om_hop
Nhật Anh (nghĩ): Lúc nãy mình hỏi dồn quá. Phúc nói đúng.
* [Ngồi xuống bậc đá cạnh ông]
    -> lys_ngoi
+ [Để ông yên]
    -> DONE

= lys_ngoi
Ba người ngồi xuống bậc đá, cách ông một khoảng vừa đủ lịch sự. Một lúc lâu không ai nói gì. Ngoài cổng, tiếng hô xa dần.
Phúc ngồi gần ông nhất. Theo thói quen, cậu đưa tay ra sau lưng tìm cái phích trà vẫn mang theo đi học, và bàn tay quờ vào khoảng không. Cậu nhớ ra mình đang ở đâu, ngượng ngùng rút tay về, gãi gáy.
Lysandros: Tìm gì đấy, chàng trai? # p:lysandros_cuoi
Phúc: Dạ, bình trà ạ. Ở nhà cháu hay mang theo, để mời người ta. Ngồi cạnh ai mà không có gì mời, cháu thấy kỳ kỳ.
Ông lão bật cười. Tiếng cười khàn và ngắn, như lâu lắm rồi ông mới dùng tới nó. Ông tên Lysandros, dạy chữ cho con nhà buôn ở khu phố thợ. Ông nói chuyện như một người đã lâu lắm không có ai chịu ngồi nghe. # p:lysandros_cuoi # intro:lys
Phúc: Lúc nãy ông nói người ta khóc như thể thư viện mới chết đêm qua. Vậy là sao ạ?
Lysandros: Là thư viện chết từ trăm năm trước rồi. Ông nội ta là học trò của Aristarchus, người giữ thư viện cuối cùng còn đáng gọi là người giữ thư viện. # p:lysandros_om_hop
Lysandros: Năm nhà vua đuổi học giả ra khỏi thành, chừng trăm năm trước, ông ấy phải bỏ chạy, ông nội ta chạy theo. Từ đó, người ta vẫn xếp sách lên kệ, nhưng không còn ai đọc chúng. Chỉ còn người đếm chúng.
Ông vỗ nhẹ lên nắp hộp gỗ, hai cái, như vỗ lưng một đứa trẻ.
Lysandros: Và có người đếm bớt đi. # note:n_lys
~ lys = 2
Phúc: Ông cụ than thở vậy thôi, người già hay nói "hồi xưa khác". # advice
* [Hỏi: "Ai đếm bớt đi ạ?"]
    Lysandros lắc đầu. Ông ôm chặt cái hộp hơn, mắt liếc về phía lối hành lang dẫn vào trong, rồi không nói gì nữa. # p:lysandros_om_hop
    Nhật Anh (nghĩ): Ông ấy biết. Nhưng chưa tin mình đủ để nói.
    -> DONE
* [Không hỏi thêm, chỉ cảm ơn ông]
    Nhật Anh: Tụi con cảm ơn ông.
    Lysandros: Đi đi. Người trẻ thì có việc của người trẻ. # p:lysandros_om_hop
    Ông nói vậy, nhưng lúc ba người đứng dậy, Nhật Anh thấy ông nhìn theo.
    -> DONE

= lys_than
Lysandros vẫn ngồi đó với cái hộp gỗ, nhìn đám đông ngoài cổng như nhìn một vở kịch đã xem quá nhiều lần. Thấy ba người, ông gật đầu, nhưng không nói gì. # p:lysandros_om_hop
* {co_e_ke} [Kể với ông về mười bảy ô kệ trống]
    Nhật Anh ngồi xuống cạnh ông, lần này gần hơn. Cô kể về những ô kệ trống, về lớp bụi không lẫn một hạt tro, về những vệt sạch hình trụ còn in trên mặt gỗ, vệt thì sắc, vệt thì đã bị bụi phủ mờ. Cô lấy ngón tay vẽ lên nền đá hình một ô kệ cho ông xem.
    Lysandros nhìn hình vẽ rất lâu. Bàn tay ông trên nắp hộp không còn siết chặt nữa. # p:lysandros_om_hop
    Lysandros: Vậy là có người khác cũng nhìn thấy.
    ~ lys = 3
    -> lys_mo_hop
* [Hỏi về cái hộp gỗ]
    Lysandros: Cái hộp của một ông già thì có gì mà hỏi. # p:lysandros_om_hop
    Nhật Anh (nghĩ): Ông ấy chưa tin mình. Mình phải cho ông ấy thấy mình cũng đã tự nhìn ra điều gì đó.
    -> DONE
+ [Ngồi thêm một lúc rồi đi]
    -> DONE

= lys_mo_hop
{co_e_hop: -> lys_da_mo}
Ông lão ngập ngừng một lúc, ngón tay cái miết đi miết lại trên mép nắp. Rồi ông mở hộp.
Bên trong, lót một lớp vải lanh, là một cuộn giấy cói nhỏ. Mép giấy đã ngả nâu vì tuổi, nhưng nguyên vẹn, không một vết cháy, không một vệt khói. # p:lysandros_cuoi
Lysandros: Chú giải của Aristarchus về Homer. Bản duy nhất còn lại trong thành này, nếu ta không nhầm. # ev:e_hop
~ co_e_hop = true
Lysandros: Đứa cháu gái ta mang ra cho ta, từ tháng trước. Nó chép sách thuê cho thư viện. Nó bảo, để ở đó thì sớm muộn cũng lên thuyền.
Nguyệt: Lên thuyền là đi đâu ạ?
Lysandros: Cái đó các cháu hỏi nó. Nó biết nhiều hơn ta.
{thay_myrto: Nguyệt: Cô gái ôm giỏ mây ở cổng phụ. Giấy trong giỏ cũng không cháy. # advice}
Phúc: Ông cho tụi cháu gặp chị ấy được không ạ? Tụi cháu không tới để bắt ai. # p:phuc_cuoi
Lysandros nhìn Phúc một lúc. Rồi ông đóng nắp hộp lại, chống một tay lên cột, chậm rãi đứng dậy. # p:lysandros_om_hop
Lysandros: Nhà ta ở khu phố thợ, sau chợ cá. Nó không mở cửa cho người lạ đâu. Ta về trước, các cháu tới thì cứ gõ cửa, ta ra mở. # loc:nha_lys
~ mo_nha_lys = true
Ông ôm cái hộp đi dọc hiên, bước chậm nhưng không dừng, rồi khuất sau cổng phụ.
-> DONE

= lys_da_mo
Chỗ ông lão ngồi lúc nãy giờ chỉ còn một vệt bụi hình chiếc hộp trên bậc đá. Ông đã về nhà, sau chợ cá.
-> DONE

=== hien_hanh_lang ===
{bi_chan_hanh_lang: -> hanh_lang_vao}
~ bi_chan_hanh_lang = true
Ở đầu kia hiên cột có một lối hành lang dẫn vào sâu bên trong Mouseion. # scene:hanh_lang Càng đi vào, tiếng đám đông càng nhỏ, không khí càng tối và mát. Cuối hành lang là một cánh cửa gỗ cao khép hờ. Qua khe cửa, Nhật Anh thấy những dãy kệ cao tới tận trần.
Nguyệt: Kệ sách. Vậy đây là phòng đọc.
Ba người còn cách cánh cửa mười bước thì có tiếng dép đi nhanh sau lưng, rồi một bàn tay đeo nhẫn vàng đặt nhẹ lên vai Phúc.
Nikanor: Đừng vào đó, chàng trai. Phòng đọc đóng cửa rồi. Khói từ kho tràn sang cả đêm. # p:nikanor_hien
Ông ta hơi thở gấp, như vừa đi vội từ ngoài cổng vào, nhưng nụ cười thì vẫn nguyên.
Nikanor: Vào phòng tôi uống chén trà đã. Bạc hà với mật ong, tôi vừa pha.
{lys >= 2: Phía sau họ, ở cuối hiên cột, Lysandros ngẩng lên nhìn.}
Phúc nhìn bàn tay trên vai mình, rồi nhìn Nhật Anh. Cả đời cậu là người đi mời trà người khác. Chưa có ai từng chạy theo để mời cậu một chén.
Phúc: Ông ấy tử tế quá. Từ chối thì kỳ lắm. # advice
* [Nhận lời, theo Nikanor về phòng uống trà]
    -> tra
* [Từ chối giúp Phúc: "Dạ, cảm ơn ông, nhưng tụi cháu muốn tự nhìn"]
    Nhật Anh: Dạ, cảm ơn ông, nhưng tụi cháu muốn tự nhìn.
    Nikanor mỉm cười, rút tay về. Nụ cười ấy không đổi chút nào, chỉ có đôi mắt là nguội đi một chút. # p:nikanor_lanh
    Nikanor: Tùy các vị.
    Ông ta quay đi, tiếng dép xa dần về phía cổng. Phúc thở ra một hơi dài. Hai bàn tay cậu hơi run, và cậu nhét chúng vào túi quần cho khỏi ai thấy. Cả đời cậu chưa từ chối chén trà của ai. # p:phuc_tu_choi
    {lys >= 2:
        Nhật Anh ngoái lại. Ở cuối hiên cột, Lysandros vẫn nhìn theo họ, lâu hơn lần trước. # p:lysandros_om_hop
        ~ lys = 3
        Nhật Anh (nghĩ): Ông cụ để ý chuyện đó. Có lẽ lát nữa ông ấy muốn nói gì đó với mình.
    }
    -> hanh_lang_vao
= tra
Nikanor dẫn ba người rẽ vào một căn phòng nhỏ bên hành lang. Cửa sổ nhìn ra sân. Trên bàn bày những chồng bảng sáp xếp vuông vức, mấy cuộn sổ buộc dây, một cái cân đồng, một bình gốm còn bốc hơi. Mọi thứ trong phòng đều sạch và ngăn nắp, sạch tới mức Nguyệt đưa mắt nhìn quanh tìm một vết bụi mà không thấy. # scene:phong_nikanor
Nikanor tự tay rót. Mùi bạc hà và mật ong bốc lên, ấm và ngọt. Phúc nâng chén bằng hai tay. Lần hiếm hoi được người khác mời lại, cậu thấy lòng mình mềm đi. # p:phuc_cuoi
~ uong_tra = true
Nikanor rót chén thứ hai, rồi chén thứ ba. Ông ta hỏi ba người từ đâu tới, gật gù nghe, khen Phúc lễ phép. Ngoài cửa sổ, bóng cột ngắn dần. # time:1
Nikanor: Các vị ăn nói khéo. Thành này đang đau, mà người đau thì dễ làm liều. # p:nikanor_hien
Ông ta đặt chén xuống, nhìn ra cửa sổ, nơi đám đông vẫn còn tụ ở cổng.
Nikanor: Nếu có ai đứng ra nói với họ vài lời nhẹ nhàng, bảo họ về nhà, để việc trừng phạt cho người có quyền lo... Họ sẽ nghe người lạ dễ thương hơn nghe một ông thủ quỹ già như tôi.
Phúc: Đây đúng là việc tớ làm giỏi nhất. Giúp người ta bớt giận nhau. # advice
Nguyệt: Mất bao nhiêu nước cho việc đó? # advice
* [Nhận lời, ra bậc thềm dỗ đám đông về nhà]
    Ba người đứng trên bậc thềm Mouseion cho tới khi bóng cột ngả hẳn sang một bên. Họ rót nước cho một bà cụ ngất vì nắng, dỗ một gã định ném đá vào lính La Mã hãy về lo cho vợ con. Phúc nói nhiều nhất, và người ta nghe cậu thật. # scene:cong
    Họ làm rất giỏi. Và vì làm rất giỏi, họ không còn thời gian quay lại cánh cửa gỗ cuối hành lang. # time:3
    ~ di_do_dam_dong = true
    -> DONE
* [Cảm ơn ông, rồi xin phép đi]
    Nhật Anh: Tụi con cảm ơn ông. Tụi con xin phép đi ạ.
    Nikanor tiễn ba người ra tận hiên. Suốt đường đi, bàn tay ông ta đặt trên vai Phúc, cho tới bậc thềm cuối cùng. # time:1
    Nhật Anh (nghĩ): Ông ta tiễn mình ra tận cổng. Tức là ông ta không muốn mình quay lại cái hành lang ấy.
    -> DONE

= hanh_lang_vao
{co_e_hanh_lang: -> vao_phong}
{uong_tra: Lần này không ai chặn họ. Nikanor đang bận với đám đông ngoài cổng.}
Hành lang mát rượi. # scene:hanh_lang
Nhật Anh hít một hơi thật sâu, và chỉ ngửi thấy mùi đá mát và mùi giấy cũ, giống hệt góc thư viện trường cô vào buổi trưa không ai lên.
Nguyệt dừng lại, ngửa mặt nhìn trần, rồi quệt ngón tay lên tường và giơ lên. Ngón tay sạch.
Nguyệt: Không có khói. Kho cháy nằm ở phía cảng, còn chỗ này ở sâu tận bên trong. Khói mà tràn sang cả đêm thì tường phải đen. # advice
~ co_e_hanh_lang = true
Nhật Anh (nghĩ): Vậy mà ông ta bảo khói độc tràn sang cả đêm. # ev:e_hanh_lang
- (vao_phong)
Cánh cửa gỗ khép hờ. Nhật Anh đẩy cửa bước vào. # go:phong_doc
-> DONE

// ==========================================================
//  PHÒNG ĐỌC
// ==========================================================
=== doc_vao ===
{luot == 1 and co_e_ke == false:
    Phòng đọc cao như một giáo đường. Ánh sáng rơi xuống từ những ô cửa hẹp sát trần thành những cột sáng chéo, trong đó bụi bay lơ lửng như những con côn trùng rất nhỏ. Ba bức tường phủ kín kệ gỗ từ sàn lên tới trần. Giữa phòng là một dãy bàn đọc dài, không một bóng người.
    Tiếng bước chân của ba người dội lên trần rồi dội xuống, to tới mức Phúc tự động đi nhón chân.
    Phúc: Thư viện mà không có ai luôn hả.
    Nguyệt hít một hơi, rồi hít thêm một hơi nữa cho chắc.
    Nguyệt: Cũng không có mùi khói.
}
{luot > 1 and co_e_ke == false: Không có khói. Không có một chút khói nào. Phòng đọc vẫn cao như giáo đường, vẫn những cột sáng chéo và bụi bay lơ lửng. Lần trước Nhật Anh đứng ở đây mà không nhìn kỹ một ô kệ nào.}
-> DONE

=== doc_ke ===
{co_e_ke: -> da_xem}
Nhật Anh lại gần bức tường kệ đầu tiên. Kệ chia thành những ô vuông như tổ ong, mỗi ô xếp những cuộn giấy cói nằm ngang, đầu cuộn hướng ra ngoài như những miệng ống tròn. Trên mép mỗi ô có khắc một ký hiệu: một chữ cái Hy Lạp và một con số.
Rải rác giữa những ô đầy, có những ô trống.
Nguyệt: Nếu lửa vào tới đây thì phải có tro, có muội, có giấy cháy dở. # advice
Nhật Anh (nghĩ): Muốn biết sách có cháy không thì phải nhìn từng ô một, kỹ như lúc mình vẽ lại một trang truyện.
+ [Soi từng ô kệ]
    Nhật Anh cúi sát xuống ô kệ đầu tiên. # time:1 # mg:ke>doc_ke_xong
    -> DONE
+ [Để sau]
    -> DONE
= da_xem
Mười bảy ô. Nhật Anh nhắm mắt lại vẫn thấy rõ từng ô một: vị trí, ký hiệu trên mép, độ dày của lớp bụi.
-> DONE

=== doc_ke_xong ===
Nhật Anh đứng thẳng dậy, lưng mỏi nhừ. Cô đứng giữa những cột sáng chéo và nhắm mắt lại một lúc, cố khắc từng ô vào trí nhớ như khắc một bức vẽ. # p:na_hieu
Nhật Anh: Mười bảy ô trống. Không ô nào có tro. Ba ô mới trống, vệt bụi còn sắc. Mười bốn ô trống lâu rồi, bụi phủ lại hết.
Phúc: Tức là sách đi từ trước đêm qua lâu rồi?
Nhật Anh (nghĩ): Lửa không lấy sách theo kiểu này. Lửa không chọn từng ô, không chia ra làm nhiều tháng, và không thể cháy mà không để lại một vệt muội nào.
Nguyệt: Ký hiệu trên mép ô là mã sách. Thư viện cỡ này phải có danh mục ghi mã nào là cuốn nào. Người giữ danh mục chắc là ông tư tế cậu bé ở cổng nói tới. # advice
-> DONE

=== doc_cua_so ===
Nắng xiên qua ô cửa hẹp, đổ thành một cột sáng chéo xuống mặt bàn đọc dài. Nhật Anh lướt ngón tay trên mặt bàn. Không có cuộn sách nào đang mở, không có vết mực, không có cả một vết xước mới. Mấy cái ghế đẩu kê sát vào bàn, thẳng hàng, như chưa từng có ai kéo ra.
Nhật Anh (nghĩ): Bàn đọc mà sạch như bàn mới. Lâu lắm rồi không ai ngồi đọc ở đây.
{lys >= 2: Nhật Anh nhớ tới câu của Lysandros: người ta vẫn xếp sách lên kệ, nhưng không còn ai đọc chúng.}
-> DONE

// ==========================================================
//  DÃY KHO
// ==========================================================
=== kho_vao ===
{thay_myrto: -> DONE}
Ba người đi xuôi theo bờ cảng phía tây. Càng đi, mùi khét càng nặng, nặng tới mức Phúc phải kéo cổ áo lên bịt mũi. Dãy nhà kho sát cảng mái đã sập, tường ám khói đen tới tận nóc. Khói vẫn bốc lên dày từ bên trong, và mấy người phu đang hắt từng xô nước biển vào một đống gỗ còn âm ỉ.
Đi ngang bức tường sau của Mouseion, chỗ có một cánh cổng phụ nhỏ trổ ra phía cảng, ba người suýt va phải một cô gái.
Cô gái trạc tuổi Nguyệt, tóc búi vội, đầu ngón tay đen mực, vừa bước ra từ cổng phụ, hai tay ôm một cái giỏ mây phủ vải. Cô đi nhanh và cúi đầu, như người sợ bị gọi lại.
Gió từ biển thổi tới, lật lên một góc vải. Bên trong là đầu những cuộn giấy cói xếp khít nhau. Không cháy, không ám khói, trắng ngà như giấy mới.
Cô gái thấy ba người nhìn vào giỏ. Cô kéo vội góc vải xuống, ôm giỏ sát vào ngực, rồi rẽ ngoặt vào một con hẻm.
~ thay_myrto = true
Nguyệt: Ăn trộm lúc loạn. Một đứa trộm vặt thì không đốt cả thư viện, nhưng vẫn là trộm. # advice
Phúc: Hay chị ấy chỉ đang mang sách đi cất?
Cô gái đã đi tới đầu con hẻm.
* [Đuổi theo cô gái]
    Nhật Anh chạy theo. Hẻm rẽ ra ba ngả, ngả nào cũng đầy người gánh gồng, và cô gái biến mất giữa họ. Ba người đứng thở dốc ở đầu hẻm. # time:1
    Nhật Anh (nghĩ): Sách trong giỏ không cháy. Vậy là cô ấy lấy sách ra trước khi lửa tới, hoặc từ chỗ lửa không tới. # note:n_co_gai
    -> DONE
* [Để cô ta đi, ghi nhớ khuôn mặt]
    Nhật Anh nhìn theo cho tới khi tấm lưng gầy ấy khuất hẳn.
    Nhật Anh (nghĩ): Tóc búi vội, ngón tay đen mực. Sách trong giỏ không cháy. Mình sẽ nhận ra cô ấy. # note:n_co_gai
    -> DONE

=== kho_trong ===
{co_e_kho: -> da_do}
Nguyệt lấy khăn tay bịt mũi, đứng ở cửa kho đầu tiên, để mắt quen dần với bóng tối. # scene:trong_kho
Bên trong nóng như lò. Có sách thật. Những cuộn giấy cói cháy dở, cong queo như lá khô, chất thành đống dưới những cái kệ đã sập. Phúc cúi xuống nhặt một mẩu, và nó vỡ vụn ra trong tay cậu thành tro đen.
Phúc: Vậy là cháy thật rồi.
Nguyệt không trả lời. Cô đang nhìn những cái chân kệ còn cắm trên nền đất, môi mấp máy đếm.
Nguyệt: Cháy thật. Nhưng cả thành nói bốn trăm nghìn. Mình đếm thử xem cái kho này chứa nổi bao nhiêu. Chiều dài tường, số kệ, số tầng, số cuộn một tầng. Nhân lên là ra. # advice
+ [Đo và ước sức chứa của kho]
    Nguyệt bắt đầu đếm bước dọc bức tường. # time:1 # mg:kho>kho_xong
    -> DONE
+ [Ra ngoài]
    -> DONE
= da_do
Nguyệt nhìn lại đống tro, đọc lại con số trong đầu, và không nói gì.
-> DONE

=== kho_xong ===
Nguyệt bước ra khỏi kho, gỡ khăn bịt mũi, ho mấy tiếng. Mặt cô lấm lem muội, nhưng mắt sáng lên như mỗi lần giải xong một bài toán khó. # p:nguyet_dem
Nguyệt: Mười kệ, năm tầng, mỗi tầng chừng một trăm cuộn. Một kho năm nghìn. Sáu kho, ba mươi nghìn.
Nguyệt: Cách bốn trăm nghìn rất xa. # p:nguyet_dem
{luot == 1: Nguyệt: Nhưng thủ quỹ là người giữ sổ. Có thể trong thành còn những kho khác tớ chưa thấy. # advice}
{luot > 1: Nguyệt: Lần trước tớ đã có số của chính mình trong tay, vậy mà vẫn đi tin số của ông ta. # advice}
-> DONE

// ==========================================================
//  TRẠI LA MÃ
// ==========================================================
=== trai_rufus ===
{gap_rufus: -> lan_sau}
Lều đỏ dựng thành hàng sát bờ biển, rào quanh bằng một hàng cọc gỗ vót nhọn. Đám đông Nikanor xua tới đang dồn ngoài hàng rào, la ó, giơ nắm đấm.
Trại quân La Mã không giống chút nào những đạo quân giáp bạc sáng lóa trong game Phúc hay chơi. Mấy chục người lính ngồi bệt dưới đất, mặt đen muội, có người đang quấn lại vết bỏng trên cánh tay, có người ngủ gục vào khiên giữa tiếng la ó, như đã quá mệt để nghe.
Phúc: Họ trông giống người vừa đi chữa cháy hơn là người vừa đốt nhà.
Người đứng sau hàng rào là một viên đội trưởng, da cháy nắng bóng lên ở gò má, bàn tay trái thiếu mất một đốt ngón út. Ông ta đứng yên, hai tay khoanh trước ngực, để đám đông hét vào mặt mình mà không đáp một lời. Lính gọi ông ta là Rufus. # p:rufus_met # intro:rufus
Nhân lúc đám đông ngừng hô để lấy hơi, Nhật Anh len lên sát hàng rào. Rufus nhìn cô, một con bé ăn mặc kỳ lạ, và có vẻ quyết định rằng trả lời cô còn dễ hơn trả lời cả bến cảng.
Rufus: Gì?
* [Hỏi: "Các ông đã đốt thư viện à?"]
    ~ gap_rufus = true
    Rufus: Chúng tôi đốt thuyền. Thuyền của bọn muốn vây chúng tôi trong cảng. Tôi ra lệnh, tôi nhận. # p:rufus_met
    Rufus: Gió đêm qua thổi vào bờ, lửa bén sang kho, sang mấy dãy nhà sát bến. Cái đó cũng là thật. Còn cái gì nằm trong mấy cái kho ấy, tôi không biết. Tôi không ra lệnh cho gió.
    Nhật Anh (nghĩ): Ông ta nói giống ba mỗi lần có chuyện. Ba có làm, nhưng ba không cố ý, còn phần còn lại là tại một thứ khác. # p:na_gian
    Nguyệt: Ông ta tự nhận. Đây là lời khai rõ nhất mình có từ sáng tới giờ. # advice
    -> lan_sau
* [Đứng nhìn, không hỏi gì]
    Rufus liếc ba người, rồi quay sang nói gì đó với người lính bên cạnh. Người lính bật cười, một tiếng cười mệt. # p:rufus_met
    -> DONE

= lan_sau
{lan_sau > 1: Rufus thấy ba người quay lại thì nhíu mày, nhưng vẫn bước tới sát hàng rào. # p:rufus_met}
{lan_sau > 1: Rufus: Lại hỏi gì nữa?}
* {co_e_myrto or co_e_ruong} [Hỏi: "Đêm qua lính của ông có canh bến phía đông không?"]
    Rufus nheo mắt, nhìn Nhật Anh lâu hơn hẳn. Rồi ông ta liếc về phía đám đông, hạ giọng. # p:rufus_khai
    Rufus: Lính tôi canh cả hai bến. Lửa cháy ở bến tây. Trong lúc ấy, ở bến đông, có một đoàn người khiêng rương xuống thuyền. # p:rufus_khai
    Rufus: Chúng có giấy phép mang dấu Mouseion. Lính tôi không chặn. Việc của thư viện đâu phải việc của chúng tôi.
    ~ co_e_rufus = true
    Phúc: Ông có chịu nói điều này trước mặt ngài tư tế không ạ? Không ai bắt ông nhận thêm gì cả. # p:phuc_cuoi
    Rufus nhìn Phúc. Lần đầu tiên từ lúc ba người tới, khóe miệng ông ta nhếch lên một chút.
    Rufus: Tôi đã đốt thuyền. Tôi nhận. Nhưng tôi không nhận phần của người khác. Gọi thì tôi tới. # p:rufus_khai # ev:e_rufus
    ~ rufus_hua = true
    -> DONE
* [Hỏi: "Ông thật sự không biết trong kho có gì?"]
    Rufus: Kho là kho. Tôi là lính, không phải thủ thư. # p:rufus_met
    Ông ta định quay đi, rồi dừng lại, nói qua vai.
    Rufus: Mà này, cô bé. Lính tôi canh cả hai bến cả đêm. Muốn hỏi thì hỏi cho trúng.
    Nhật Anh (nghĩ): Cả hai bến? Bến tây cháy. Còn bến kia thì sao?
    -> DONE
+ [Thôi]
    -> DONE

=== trai_hang_rao ===
Một hòn đá bay qua hàng rào, đập vào một cái khiên đánh cộp. Người lính cầm khiên không buồn ngẩng lên. Anh ta trông chẳng lớn hơn ba đứa bao nhiêu, mặt còn lấm tro, tay đang quấn dở một dải băng.
Phúc đứng nhìn người lính ấy rất lâu. Lúc sáng cậu còn gọi người trong thành này là NPC.
-> DONE

// ==========================================================
//  PHÒNG CỦA DORION
// ==========================================================
=== dorion_noi ===
{dorion == 0: -> lan_dau}
{dorion == 1: -> dong}
{dorion == 2: -> tin}

= lan_dau
Phòng của vị tư tế nằm sau sân trong, cửa mở. Bên trong mát và tối, chỉ có một ô cửa sổ cao. Dọc tường là những giá gỗ xếp đầy cuộn giấy dày. Một cậu học trò đứng hầu ngoài cửa, ôm tấm bảng sáp.
Vị tư tế đứng đầu Mouseion là một người đàn ông cao, trán rộng, áo trắng thêu những dải lá nguyệt quế. Ông đang lật từng cuộn giấy dày trên giá, chậm và nặng nề, như người đang đọc lại di chúc của chính mình. Trên bàn cạnh ông có một bát cháo lúa mạch đã nguội, chưa ai động thìa. # p:dorion_dong
Cậu học trò khẽ gọi vào: "Thưa ngài Dorion, có khách lạ." # intro:dorion
Dorion không quay lại ngay. Ông cuộn nốt cuộn giấy, đặt lại lên giá, rồi mới nhìn ba người.
Dorion: Các ngươi là ai, mà vào được tới đây?
Nhật Anh (nghĩ): Ông Theophrastus nói phải tìm người có quyền xét xử. Ở đây, người đó là ông này.
Dorion: Nếu các ngươi tới để hỏi thư viện mất bao nhiêu, thì thủ quỹ của ta đã nói với cả thành rồi. Ta không có gì để nói thêm.
Nguyệt: Tớ có số liệu. Nói thẳng là nhanh nhất. # advice
Phúc: Ông ấy là người giữ đền. Mình xin phép ông ấy trước, đừng làm như mình đi bắt lỗi. # advice
* [Nói thẳng: "Ông có danh mục sách không? Thủ quỹ của ông đang nói dối."]
    Nhật Anh: Ông có danh mục sách không ạ? Thủ quỹ của ông đang nói dối.
    Vẻ mặt Dorion đóng lại, chậm rãi, như một cánh cửa nặng. # p:dorion_dong
    Dorion: Nikanor giữ sổ cho nhà này mười hai năm. Mười hai năm, chưa thiếu một đồng. Còn ngươi tới thành này từ sáng nay.
    Dorion: Ngươi là ai, mà bước vào đây buộc tội người của Mouseion?
    ~ dorion = 1
    Dorion quay lại với giá sách, như thể ba người không còn đứng đó.
    Phúc: Ông ấy đóng cửa rồi. Lần sau mình phải xin lỗi trước, rồi mới nói tới chuyện sổ sách. # advice
    -> DONE
* [Xin phép: "Ông là người có quyền biết sách còn bao nhiêu. Tụi cháu chỉ xin được đếm cùng ông."]
    Nhật Anh: Ông là người giữ đền của các nàng Muse. Sách còn bao nhiêu thì ông có quyền biết nhất. Tụi con chỉ xin được đếm cùng ông.
    -> tin_lan_dau

= dong
Dorion vẫn đứng quay lưng về phía cửa, trước giá sách. Cậu học trò ngoài cửa nhìn ba người, lắc đầu rất khẽ, như muốn bảo đừng vào. # p:dorion_dong
* [Xin lỗi ông]
    Nhật Anh: Con xin lỗi ông. Lúc nãy con nói hồ đồ. Ông là người giữ đền của các nàng Muse, sách của các nàng còn bao nhiêu thì ông có quyền biết nhất. Tụi con chỉ xin được đếm cùng ông.
    Nguyệt đứng cạnh cô, khẽ cúi đầu theo. Lần hiếm hoi trong năm nay Nguyệt cúi đầu mà không bị ai ép. # p:nguyet_xin_loi
    Dorion vẫn chưa quay lại. Nhưng vai ông hạ xuống một chút.
    -> tin_lan_dau
+ [Để lúc khác]
    -> DONE

= tin_lan_dau
Dorion nhìn ba người một lúc lâu. Rồi ông kéo cái ghế đẩu ra, ngồi xuống, như người bỗng thấy chân mình mỏi. # p:dorion_nghe
Dorion: Đêm qua ta ở ngoài bến tây với cả thành. Ta đứng nhìn lửa, và ta không làm được gì. Sáng nay Nikanor nói bốn trăm nghìn, ta cũng chỉ biết gật đầu.
Dorion: Ta là người giữ đền, mà ta không biết sách của các nàng còn bao nhiêu.
Ông đứng dậy, rút từ giá gỗ ra một cuộn giấy dày cộp, đặt lên bàn, gạt bát cháo nguội sang một bên.
Dorion: Pinakes. Danh mục của Callimachus, được chép tiếp qua bao đời người giữ sách. Đếm cùng ta. Không được mang ra khỏi phòng này.
~ dorion = 2
-> tin

= tin
{tin > 1: Dorion ngẩng lên khỏi danh mục, nhìn ba người. # p:dorion_nghe}
Dorion: Danh mục ở đây. Các ngươi cần đối chiếu gì? # p:dorion_nghe
{co_e_myrto and lys >= 2 and not co_e_day and not goi_y_day: Nguyệt: Ông Lysandros kể chuyện trăm năm trước, chị Myrto kể chuyện ba năm nay, còn cả thành chỉ kể chuyện đêm qua. Kẹp hết các mốc lên một sợi dây là thấy ngay chuyện nào dài nhất. # advice}
{co_e_myrto and lys >= 2:
    ~ goi_y_day = true
}
+ {co_e_ke and not co_e_pin} [Đối chiếu mười bảy ô kệ trống với Pinakes]
    Nhật Anh đọc to từng ký hiệu cô nhớ được, còn Nguyệt dò theo từng dòng danh mục. # time:1 # mg:pin>dorion_pin_xong
    -> DONE
+ {not co_e_ke and not co_e_pin} [Mở Pinakes ra xem]
    Dorion: Đối chiếu cái gì? Ngươi phải biết mình đang tìm cái gì đã, rồi hẵng mở danh mục. # p:dorion_dong
    Nhật Anh (nghĩ): Mã sách khắc trên mép kệ. Mình phải vào phòng đọc nhìn kệ trước đã.
    -> DONE
+ {co_e_myrto and lys >= 2 and not co_e_day} [Mượn bức tường trống để căng dây niên đại]
    Nguyệt mượn một cuộn dây gai và mấy tấm bảng sáp của cậu học trò. # time:1 # mg:day>dorion_day_xong
    -> DONE
+ {not co_e_day and (not co_e_myrto or lys < 2)} [Hỏi ông về lịch sử thư viện]
    Dorion: Lịch sử thì dài. Các ngươi cần mốc, chứ không cần ta đọc cả trăm năm cho nghe. # p:dorion_nghe
    {lys < 2: Nhật Anh (nghĩ): Ai trong thành này nhớ thư viện từ hồi nó còn người đọc?}
    {not co_e_myrto: Nhật Anh (nghĩ): Còn những gì xảy ra gần đây thì phải hỏi người làm việc trong thư viện mỗi ngày.}
    -> DONE
+ [Thôi]
    -> DONE

=== dorion_pin_xong ===
Nhật Anh đọc tới ký hiệu cuối cùng thì dừng. Không ai nói gì. Ngoài cửa, cậu học trò cũng thôi gõ bút lên bảng sáp.
Dorion đặt bàn tay lên danh mục, nhưng lần này bàn tay ấy đè xuống nặng hơn, như muốn giữ cho những dòng chữ khỏi bay đi. # p:dorion_nghe
Dorion: Mười bảy dòng. Toàn những bản có đánh dấu sao, những bản quý nhất. Không một cuộn nào trong số ấy nằm ở những nhà kho sát cảng.
Dorion: Lửa thì không biết cuốn nào quý mà chọn.
Ông nói câu ấy rất nhỏ, như nói với chính mình. Rồi ông ngẩng lên, nhìn ra cửa, về phía hành lang dẫn tới phòng thủ quỹ, và không nói gì thêm.
-> DONE

=== dorion_day_xong ===
Sợi dây gai căng ngang bức tường trống, kẹp bốn tấm bảng sáp. Dorion đứng lặng trước nó rất lâu. Ông đi dọc theo nó, từ đầu này tới đầu kia, và dừng lại ở khoảng dây trống dài nhất, giữa năm học giả bị đuổi đi và năm những chiếc rương đầu tiên ra bến. # p:dorion_nghe
Dorion: Phần lớn sợi dây này không dính gì tới lửa.
Ông chạm ngón tay vào khoảng dây ấy.
Dorion: Ta nhận chức ở đây hai mươi năm trước. Hai mươi năm ấy nằm trọn trong đoạn này.
-> DONE

// ==========================================================
//  NHÀ LYSANDROS · MYRTO
// ==========================================================
=== myrto_noi ===
{myrto >= 2: -> sau}
{myrto_noi == 1: Nhà Lysandros nằm cuối một con hẻm sau chợ cá, mùi tanh bám cả vào tường. Nhật Anh vừa gõ cửa, Lysandros đã ra mở, như đã đứng chờ sẵn sau cánh cửa. Ông dẫn ba người qua một khoảng sân nhỏ phơi đầy giấy cói, rồi đẩy cánh cửa căn phòng phía sau.}
{myrto == 0:
    Cô gái ngồi giữa những tập giấy cói chất tới đầu gối. Thấy ba người bước vào, cô đứng bật dậy, chắn trước chồng giấy như con mèo mẹ chắn trước ổ mèo con. Ngón tay cô đen mực tới tận kẽ móng.
    {thay_myrto: Nhật Anh nhận ra cô ngay: cô gái ôm giỏ mây ở cổng phụ.}
    Phúc: Tụi em chào chị. Tụi em đi cùng ông chị, không phải lính gác đâu. # p:phuc_cuoi
- else:
    Cô gái vẫn ngồi chắn trước chồng giấy, khoanh tay, nhìn ba người như nhìn lính gác.
}
Myrto: Tôi không ăn trộm. # p:myrto_chan
~ myrto = 1
Phúc: Chị ấy đã chuẩn bị sẵn cả trăm câu biện hộ, và đang chờ bị buộc tội để nói ra. Đừng cho chị ấy lý do. # advice
* [Hỏi: "Vậy sao chị mang sách của thư viện về nhà?"]
    Nhật Anh: Vậy sao chị mang sách của thư viện về nhà?
    Myrto: Thấy chưa. Ai bước vào đây cũng hỏi đúng câu đó. # p:myrto_chan
    Cô khoanh tay, nhìn ra cửa sổ, và không nói gì nữa. Ở cửa, Lysandros thở dài.
    -> DONE
* [Nói: "Chị không ăn trộm. Chị đang làm việc mà người giữ thư viện lẽ ra phải làm."]
    Nhật Anh: Chị không ăn trộm. Chị đang làm việc mà người giữ thư viện lẽ ra phải làm.
    -> ke

= ke
Cô gái nhìn Nhật Anh, rồi nhìn sang ông nội đứng ở cửa. Ông gật đầu. Cô ngồi phịch xuống sàn đất, hai tay buông thõng trên đầu gối, như người vừa đặt xuống một gánh nặng mang đã lâu. Cô tên Myrto. Và cô kể. # p:myrto_ke # intro:myrto
Myrto: Ba năm nay, cứ vài ba tháng, những chiếc rương lại được khiêng ra bến phía đông vào ban đêm.
Myrto: Trong sổ của thủ quỹ, những cuộn sách ấy được ghi là bị mối mọt, bị ẩm, đã hủy. Người mua đến từ Pergamon, đôi khi từ Rome.
Myrto: Tôi không cứu được nhiều. Tôi chỉ lén chép lại vài cuộn trước khi chúng đi, và mang giấu vài cuộn quý nhất về đây.
Cô với tay lấy một tấm bảng sáp dưới chồng giấy. Trên mặt sáp là những vạch khắc nhỏ, xếp thành hàng, mỗi hàng một đêm.
Myrto: Đêm qua thì khác. Đêm qua họ khiêng nhiều lắm, nhiều hơn mọi lần cộng lại. Trong lúc cả thành chạy ra bến tây nhìn lửa. # ev:e_myrto
~ co_e_myrto = true
~ myrto = 2
~ mo_ben_dong = true
Phúc: Sao chị không nói với ai? # p:phuc_lo
Myrto: Nói với ai? Một đứa con gái chép sách thuê, buộc tội thủ quỹ của Mouseion? Trong khi trong nhà nó đang giấu một đống sách của thư viện? # p:myrto_ke # loc:ben_dong
Nhật Anh (nghĩ): Lời của chị ấy là thật. Nhưng một mình lời của chị ấy thì không ai nghe. Phải có người khác cũng thấy, hoặc phải có thứ gì đó tận mắt nhìn được.
Myrto: Nếu các người muốn tự nhìn thì ra bến phía đông. Nếu thuyền chưa đi, rương vẫn còn ở đó.
-> DONE

= sau
Myrto ngẩng lên khỏi bản chép dở. # p:myrto_ke
Myrto: Bến phía đông. Nếu còn kịp thì các người tự nhìn đi.
-> DONE

=== myrto_giay ===
Những tập giấy cói chất tới đầu gối, cuộn nào cũng sạch, có cuộn còn ướt mực. Bên cạnh mỗi bản chép là một mẩu giấy nhỏ ghi mã kệ, nét chữ nắn nót tới mức trông như in.
Nhật Anh (nghĩ): Chị ấy chép lại trước khi sách đi, giống mình hay vẽ lại một trang truyện trước khi phải trả sách cho thư viện.
-> DONE

// ==========================================================
//  BẾN PHÍA ĐÔNG
// ==========================================================
=== ben_dong_ruong ===
{co_e_ruong: -> da_thay}
Bến phía đông yên tĩnh hơn hẳn bến tây. Không có tro, không có xác thuyền, không có đám đông. Chỉ có tiếng sóng vỗ vào kè đá và tiếng mấy con hải âu cãi nhau trên cột buồm. Một con thuyền buôn neo sát kè, mũi đã quay ra biển.
Dưới một tấm bạt trên bến là một chồng rương gỗ chốt đồng. Mấy người phu khuân vác đang ngồi ăn bánh ở đầu kia, quay lưng lại. Nguyệt cúi xuống, quệt ngón tay lên nắp rương, giơ lên nhìn.
Nguyệt: Sạch. Không một vệt khói. Rương ra từ một tòa nhà vừa cháy hôm qua mà sạch thế này à? # p:nguyet_dem
Nhật Anh vén thêm một góc bạt. Trên nắp mỗi rương có niêm một dấu sáp đỏ. Hình con cú. Dấu của Mouseion. # ev:e_ruong
~ co_e_ruong = true
Nhật Anh (nghĩ): Chị Myrto nói đúng. Thuyền chưa đi.
Một người phu khuân vác quay lại, thấy họ, quát lên và vớ lấy cây sào. Ba người lùi lại, nhưng Nhật Anh đã kịp nhớ từng cái chốt đồng, từng con dấu.
-> DONE
= da_thay
Những chiếc rương vẫn nằm dưới tấm bạt. Người phu khuân vác cầm cây sào đứng chắn trước, nhìn ba người bằng ánh mắt không mấy thiện cảm.
-> DONE

// ==========================================================
//  SÂN TRONG · KIM QUY
// ==========================================================
=== san_ho ===
Sân trong rộng, lát đá trắng, bốn phía là hàng hiên cột. Tiếng đám đông ngoài cổng vào tới đây chỉ còn như tiếng sóng xa. Ở giữa sân là một hồ nước vuông, mặt nước phẳng lặng, không một gợn, in nguyên hình bầu trời.
Phúc ngồi xổm xuống thành hồ, nhìn bóng mình dưới nước, rồi khua tay cho bóng vỡ ra.
Nhật Anh (nghĩ): Ông Theophrastus nói con rùa thần sẽ nổi lên ở đây khi mặt trời lặn. Còn bây giờ, nó chỉ là một cái hồ.
-> DONE

=== san_cho ===
Đứng đây chờ thì mặt trời sẽ lặn, và không còn đi đâu được nữa.
* [Chờ tới hoàng hôn]
    ~ ngoi_cho = true
    Ba người ngồi xuống thành hồ. Bóng cột kéo dài dần trên nền đá trắng. # turtle
    -> DONE
+ [Chưa, còn việc phải làm]
    -> DONE

=== rua_noi_len ===
Ngoài cổng, giọt nước cuối cùng rơi xuống đáy bát. Mặt trời chạm mép những mái nhà phía tây. # scene:san_trong
{ngoi_cho: Ba người vẫn ngồi trên thành hồ. Mặt hồ nhuộm màu cam của buổi chiều.}
{not ngoi_cho: Thấy bóng cột đã dài ra quá nửa sân, ba người vội chạy về sân trong của Mouseion, nơi có hồ nước vuông. Mặt hồ đã nhuộm màu cam của buổi chiều.}
Mặt hồ gợn lên thành những vòng tròn, dù trời không có gió. Từ dưới đáy, một thứ gì đó nổi lên, chậm rãi như một hòn đảo nhỏ trồi lên khỏi mặt biển.
Đó là một con rùa to bằng cả cái bàn ăn nhà Nhật Anh. Mai nó màu vàng kim loại, những vân mai hiện lên như được chạm khắc. Khi nước chảy hết, mặt mai nhẵn như một tấm bảng chờ người viết. # p:kimquy_mo
Con rùa mở mắt. Mắt nó đen, sâu, và già hơn bất cứ thứ gì Nhật Anh từng thấy.
Không ai phải nhắc ba người phải làm gì. Ông Theophrastus đã nói từ sáng: một cái tên, viết một lần.
Phúc: Sáng nay tớ còn gọi họ là NPC. Giờ mình viết tên ai, người đó sẽ bị bắt thật. # advice
-> DONE

// ==========================================================
//  CÁC KIỂU THUA
// ==========================================================
=== thua_rufus ===
Nhật Anh viết cái tên ấy lên mai rùa. Nét chữ hiện lên một thoáng, rồi tối dần như than nguội.
Con rùa nhìn cái tên một lúc lâu. Rồi nó khép mắt lại. # p:kimquy_nham
Cái tên ra tới cổng còn nhanh hơn ba người. Khi họ chạy ra tới nơi, vị tư tế đã đứng trên bậc thềm, tuyên bố thành phố đã biết kẻ phải chịu tội. Rufus không chống cự. Ông ta chỉ quay lại nhìn đám lính của mình một lần, như dặn chúng đừng làm gì dại dột. # scene:cong
Đám đông reo lên. Một hòn đá bay tới, trúng vào vai ông ta. Nhật Anh quay mặt đi. # p:na_buon
Dorion: Việc kiểm kê những gì còn sót lại là không cần thiết nữa. Thủ phạm đã rõ. Thủ quỹ Nikanor sẽ lo việc khôi phục. # p:dorion_dong
Nikanor cúi đầu nhận việc, đưa tay lên dụi mắt như người vừa khóc. # p:nikanor_buon
Ngoài cảng, trong ánh chiều đã chuyển sang tím, một con thuyền lặng lẽ nhổ neo. Trong khoang xếp kín những chiếc rương gỗ, nắp đóng chặt, và không một chiếc nào ám dù chỉ một vệt khói. # scene:ben_dong # lose:rufus
~ loai_thua = "rufus"
-> DONE

=== thua_myrto ===
Nhật Anh viết cái tên ấy lên mai rùa. Nét chữ hiện lên một thoáng, rồi tối dần như than nguội.
Con rùa nhìn cái tên một lúc lâu. Rồi nó khép mắt lại. # p:kimquy_nham
Lính gác lần theo cái tên, tới một căn phòng chất đầy giấy cói sau chợ cá, và lôi cô gái chép sách ra. Cô không khóc. Cô chỉ nhìn về phía Nikanor, như thể mọi câu biện hộ cô chuẩn bị đều đã vô dụng từ lâu. # scene:cong
Dorion: Kẻ lấy sách của thư viện đã bị bắt. Thủ quỹ Nikanor sẽ thu hồi những gì nó giấu. # p:dorion_dong
Trong đám đông, ông lão ôm hộp gỗ không reo hò. Ông cúi xuống, và không ngẩng lên nữa.
Người ta mở cái giỏ mây của cô ra giữa sân. Những cuộn giấy cói bên trong sạch, khô, không một vết cháy.
Ngoài cảng phía đông, một con thuyền lặng lẽ nhổ neo. # scene:ben_dong # lose:myrto
~ loai_thua = "myrto"
-> DONE

=== thua_dorion ===
Nhật Anh viết cái tên ấy lên mai rùa. Nét chữ hiện lên một thoáng, rồi tối dần như than nguội.
Con rùa nhìn cái tên một lúc lâu. Rồi nó khép mắt lại. # p:kimquy_nham
Không có lính gác nào bước tới. Chính vị tư tế là người đứng đầu nơi này, và ông chỉ nhìn ba người khách lạ bằng ánh mắt mệt mỏi. # scene:cong
Dorion: Khách lạ đến nhà người ta, rồi chỉ tay vào người giữ nhà. # p:dorion_dong
Nikanor đứng sau lưng ông, im lặng, và Nhật Anh không đọc được gì trên khuôn mặt ông ta. # p:nikanor_lanh
Ngoài cảng phía đông, một con thuyền lặng lẽ nhổ neo. # scene:ben_dong # lose:dorion
~ loai_thua = "dorion"
-> DONE

=== thua_ga ===
Nhật Anh viết cái tên ấy lên mai rùa. Nét chữ hiện lên một thoáng, rồi tối dần như than nguội.
Con rùa nhìn cái tên một lúc lâu. Rồi nó khép mắt lại. # p:kimquy_nham
Lính gác lùng cả buổi tối mới tìm ra gã áo nâu, đang ngồi uống rượu ở một quán gần bến. Gã chỉ là một người làm công được ai đó trả vài đồng để đứng chỉ đường. # scene:cong
Gã áo nâu: Tôi có làm gì đâu! Tôi chỉ bảo người ta ra kho mà xem! # p:ga_ao_nau
Đám đông cười ồ. Nikanor đứng trên bậc thềm, lắc đầu ái ngại. # p:nikanor_hien
Ngoài cảng phía đông, một con thuyền lặng lẽ nhổ neo. # scene:ben_dong # lose:ga
~ loai_thua = "ga"
-> DONE

=== dung_ten ===
Nhật Anh viết cái tên Nikanor. Nét chữ sáng lên, bạc như vết trăng trên mặt nước. # p:kimquy_mo
Con rùa nhìn cái tên ấy, rồi nhìn cô. Lần này, nó không khép mắt. Nó chìm xuống, chậm rãi, để lại trên mặt hồ một vệt sáng bạc mãi chưa tan.
Phúc: Đúng rồi hả? Vậy là thắng rồi hả?
Nguyệt: Chưa. Ông Theophrastus dặn rồi. Viết đúng rồi thì việc vẫn chưa xong.
Nhật Anh nhìn lên. Trời đã sẫm tím. Ngoài cổng, đám đông đang tản dần về nhà, và trên bậc thềm, Nikanor vẫn còn đứng nói chuyện với mấy người buôn, tiếng cười của ông ta vọng vào tới tận sân trong.
Nhật Anh (nghĩ): Người phải nói cái tên ấy ra trước cả thành là người của thành này. Ở đây, chỉ có một người được làm việc đó.
{dorion < 2: -> thua_khong_doi_chat}
Ba người chạy tới phòng Dorion. Cửa đã khép, cậu học trò đứng hầu đã về. Nhật Anh gõ cửa, gõ thêm lần nữa, rồi Dorion mới ra mở, tay cầm ngọn đèn dầu, áo đã thay sang áo mặc ở nhà. # scene:phong_dorion
Dorion: Mặt trời lặn rồi. Ngày mai các ngươi hãy... # p:dorion_dong
{co_e_ruong or co_e_myrto: Nhật Anh: Ngày mai thì những chiếc rương đã đi mất rồi ạ.}
{not co_e_ruong and not co_e_myrto: Nhật Anh: Chuyện này không đợi được tới mai ạ.}
Dorion nhìn cô. Ông không đóng cửa.
Nhật Anh kể. Cô kể hết những gì ba người đã thấy trong ngày, và mỗi lần nhắc tới một thứ, cô nói rõ mình thấy nó ở đâu, thấy bằng cách nào.
{co_e_ruong: Những chiếc rương sạch ở bến phía đông, niêm dấu con cú của chính nhà này.}
{co_e_myrto: Những đêm rương ra bến mà Myrto đã khắc lên bảng sáp suốt ba năm.}
{co_e_rufus: Lời của Rufus, viên đội trưởng đã tự nhận phần của mình và không nhận phần của ai khác.}
{co_e_pin: Mười bảy dòng trong danh mục, mà chính ông đã đếm cùng họ.}
{co_e_ruong: Dorion nghe hết, không ngắt lời lần nào. Ngọn đèn trong tay ông khẽ run lên khi cô nhắc tới con dấu. # p:dorion_nghe}
{not co_e_ruong: Dorion nghe hết, không ngắt lời lần nào. Ngọn đèn trong tay ông khẽ run lên khi cô nhắc tới những đêm rương ra bến. # p:dorion_nghe}
Dorion: Nikanor là người ta tin nhất trong nhà này.
Ông im lặng rất lâu. Rồi ông quay vào trong, gọi người.
Dorion: Cho lính ra bến phía đông giữ con thuyền lại. Gọi thủ quỹ vào sân trong. {rufus_hua: Cho người ra trại La Mã mời viên đội trưởng.} {co_e_myrto: Mời cả ông Lysandros và cháu gái ông ấy.}
Chưa tới một canh giờ, sân trong đã sáng đuốc. Các thầy giáo, các người chép sách, rồi cả những người hàng xóm nghe tin, kéo vào đứng kín quanh hồ nước vuông. Ba người đứng ngoài vòng người, như những vị khách. Đúng luật. # scene:san_dem
{rufus_hua: Rufus đứng ở một góc sân, tay không bị trói, mũ cầm trong tay.}
{co_e_myrto: Myrto đứng sau lưng vị tư tế, ôm tấm bảng sáp vào ngực. Lysandros đứng cạnh cháu, một tay đặt lên vai nó.}
Nikanor đến, vẫn áo trắng viền xanh, vẫn nhẫn vàng. Ông ta nhìn quanh những ngọn đuốc, những gương mặt, rồi nhìn ba người khách, và mỉm cười như lúc sáng. # p:nikanor_lanh
{co_e_myrto: Rồi ông ta thấy Myrto đứng sau lưng vị tư tế. Ông ta khựng lại nửa bước. Nhưng chỉ nửa bước.}
Phúc đứng sát vào Nhật Anh. Cô nghe được cả tiếng cậu nuốt nước bọt.
Dorion: Thủ quỹ. Có người nói sổ của ông không đúng. Ông nói đi. Rồi ta sẽ hỏi. # p:dorion_nghe # mg:doichat>thang
-> DONE

=== thua_khong_doi_chat ===
Ba người chạy khắp Mouseion giữa trời tối, với một cái tên đúng mà không ai trong thành chịu nghe. # scene:san_dem
{dorion == 0: Họ gõ cửa phòng vị tư tế. Người ra mở là cậu học trò, mắt còn ngái ngủ. Cậu bảo ngài không tiếp khách lạ vào giờ này, nhất là khách chưa từng một lần tới xin gặp ngài.}
{dorion == 1: Dorion ra mở cửa, nhận ra con bé đã bước vào phòng ông buộc tội người của Mouseion lúc chiều, rồi đóng cửa lại mà không nói một lời.}
Phúc đứng giữa sân, hai tay buông thõng. Nguyệt ngồi xuống thành hồ, nhìn vệt sáng bạc trên mặt nước tan dần.
Sáng hôm sau, thủ quỹ Nikanor được giao lo việc khôi phục thư viện. # p:nikanor_buon
Ngoài cảng phía đông, con thuyền đã đi từ lúc nửa đêm. # scene:ben_dong # lose:khong_doi_chat
~ loai_thua = "khong_doi_chat"
-> DONE

=== thua_thieu_chung ===
Các câu nói của Nikanor không đổ. Chúng đứng đó, nguyên vẹn, giữa ánh đuốc. # p:nikanor_hien
Nhật Anh lục tung cuốn sổ trong đầu, tìm một thứ để đặt cạnh câu nói ấy, và không tìm ra.
Dorion: Ta nghe rồi. Nhưng ta không thể xử một người giữ sổ của Mouseion bằng một nửa câu chuyện. # p:dorion_dong
Nikanor cúi chào vị tư tế, rồi cúi chào cả ba vị khách, rất lịch sự. Lúc ông ta đi ngang qua, Nhật Anh ngửi thấy mùi bạc hà và mật ong.
Gần sáng, ngoài cảng phía đông, con thuyền nhổ neo. # scene:ben_dong # lose:thieu_chung
~ loai_thua = "thieu_chung"
-> DONE

// ==========================================================
//  THẮNG
// ==========================================================
=== thang ===
Câu cuối cùng của Nikanor đổ xuống, kéo theo những câu trước nó, như một dãy kệ sách mất chân. Ông ta đứng giữa ánh đuốc, không còn gì để nói. Bàn tay đeo nhẫn vàng của ông ta mở ra rồi nắm lại, như vẫn còn tìm một chén trà để mời ai đó. # p:nikanor_khung
Cả sân im lặng. Nhật Anh nhận ra mình đang nín thở, và Phúc đang nắm chặt tay áo cô từ lúc nào.
Cuối cùng, Dorion nói ra bản án, bằng chính miệng mình, trước mặt các thầy giáo, các người chép sách, và đám đông đã kéo vào đầy sân từ lúc nào. # p:dorion_phan
Gần nửa đêm, lính gác khiêng những chiếc rương từ bến phía đông về, đặt thành hàng trên nền đá. Dorion tự tay mở chiếc đầu tiên.
Bên trong, những cuộn giấy cói xếp khít nhau, khô ráo, sạch sẽ, không một vệt khói.
Myrto quỳ xuống, nhấc một cuộn lên, đọc dòng chữ trên nhãn, và ôm nó vào ngực như ôm một người vừa trở về từ chuyến đi xa. # p:myrto_om
Lysandros không nhìn những chiếc rương. Ông nhìn cháu gái mình.
Dorion vừa đóng nắp chiếc rương cuối cùng thì không khí giữa hai cây cột hiên gợn lên, như lúc sáng. Nhật Anh nhìn Myrto và Lysandros thêm một lần, rồi cùng Phúc và Nguyệt bước qua.
Bên kia lớp gợn, nắng vẫn trắng và khô như lần đầu. Nhật Anh đi thẳng tới bệ đầu tiên. # scene:den_thang
Bóng tượng Clio vẫn đứng đó, nhưng không còn mờ như hơi nước nữa. Nhật Anh thấy được nếp gấp trên vạt áo nàng, thấy cả mép cuộn giấy trong tay nàng. Cô vẫn nhìn xuyên qua được, nhưng phải nheo mắt mới thấy cây cột phía sau.
Theophrastus đứng cạnh bệ, một tay đặt lên mặt đá. # p:theo_tram
Theophrastus: Nàng rõ hơn sáng nay. Sáng nay cả thành ấy tin thư viện cháy rụi trong một đêm. Tối nay, ít nhất người giữ đền đã biết sách mất đi từng cuộn một, suốt nhiều năm, vì một người ông ta tin.
Phúc: Vậy nàng về chưa ông?
Theophrastus: Chưa. Còn nhiều chuyện đã xảy ra mà người ta vẫn kể sai. Nhưng nàng đã về gần thêm một bước. # p:theo_hien
Nắng trắng trong đền nhạt dần, như có ai đang vặn nhỏ một ngọn đèn. Nhật Anh thấy mi mắt mình nặng xuống, và điều cuối cùng cô nhìn thấy là bàn tay ông Theophrastus vẫn đặt yên trên mặt bệ đá.
-> ket

= ket
{luot == 1: -> ket_mot_luot}
Tối thứ Năm, lần đầu tiên sau mấy ngày tránh mặt cả nhà, Nhật Anh về nhà trước giờ cơm. Bếp thơm mùi nghệ và mùi cá chiên. # scene:bep
Nhật Anh: Con muốn ăn bún quá à.
Cô Hạnh cười, không nói gì, lấy thêm một cái tô.
Nhật Anh: Cô Hạnh. Hồi đó chị Hi có mệt vì phải lo cho con không?
Cô Hạnh: Mệt chứ sao không. Con nít nào mà không làm người lớn mệt. Nhưng con Hi nó cãi với ba con từ hồi con còn chưa biết đọc.
Cô Hạnh kể về hồi chị muốn thi chuyên Văn mà ba bắt thi chuyên Toán, về những cuốn sách tiếng Anh chị giấu dưới đệm, về đêm tiệc mừng chị đậu mà chị ra ban công đứng một mình tới khuya.
Nhật Anh nhìn xuống tô bún. Trong đầu cô vang lên câu hỏi của đôi giày, tươi tỉnh một cách đáng ghét như lúc năm giờ sáng: thử bỏ nó đi, không có nó, chuyện có còn xảy ra không?
Nhật Anh (nghĩ): Không có mình, chị có còn cãi nhau với ba không. Có còn giấu sách dưới đệm không. Có còn đứng ngoài ban công trong đêm tiệc của chính mình không.
Nhật Anh (nghĩ): Có. Tất cả đều có. # win
-> DONE

= ket_mot_luot
Nhật Anh thức dậy với miếng che mắt tuột xuống cổ, và mùi khói vẫn vương trong mũi dù cô biết là không thể. Cô đưa lòng bàn tay lên trước mặt. Vết hằn đỏ không còn, nhưng cô vẫn nhớ chỗ nó từng rát. # scene:phong_na
Bên kia căn phòng, cô Hạnh đang lau kệ sách của chị. Cô nhấc một cuốn dày ra, lật ngược lại, khẽ chặc lưỡi. Gáy sách lốm đốm mốc trắng.
Cô Hạnh: Mới có mấy tháng. Sách mà không ai mở ra thì nó cũng buồn.
Nhật Anh bước tới, đỡ cuốn sách từ tay cô Hạnh, và lần đầu tiên từ ngày chị đi, mở nó ra. # win
-> DONE

// ==========================================================
//  ĐỜI THỰC GIỮA HAI LƯỢT
// ==========================================================
=== doi_thuc ===
{luot > 1: -> chay_sang}
Nhật Anh thức dậy với miếng che mắt đã tuột xuống cổ. Ngoài cửa sổ, trời Sài Gòn mới hừng sáng, một màu xám nhạt, ẩm. # scene:phong_na
Cô đưa lòng bàn tay lên trước mặt. Không có vết hằn đỏ nào. Vậy mà chỗ ấy vẫn còn rát.
Bên kia căn phòng, cô Hạnh đang lau kệ sách của chị, cẩn thận như lau bàn thờ. Cô nhấc một cuốn dày ra, khẽ chặc lưỡi. Gáy sách đã lốm đốm mốc trắng.
Cô Hạnh: Mới có mấy tháng. Sách mà không ai mở ra thì nó cũng buồn.
Trên điện thoại, nhóm chat ba đứa đã có tin nhắn từ lúc năm giờ sáng. Phúc gửi ảnh chụp màn hình từ kính: tấm bảng đá bên cổng đền, dòng chữ "Những đội đã nộp sai", và ở dòng cuối, mới tinh, là tên ba đứa.
Phúc: bọn mình nổi tiếng rồi đó. đội thứ 1832 nộp sai. hạng cao ghê
Nguyệt: Không phải hạng. Là thứ tự. # p:nguyet_mia
{loai_thua == "rufus" or loai_thua == "myrto" or loai_thua == "dorion" or loai_thua == "ga": Phúc: mà tớ ngủ lại không được. cứ nghĩ tới cái người bị lôi đi}
Bữa cơm tối Chủ nhật có thêm dì Ba và chú Ba. Dì nói nhiều, như người sợ chỉ cần im một giây thì cái bàn ăn sẽ sụp. Rồi dì nhìn sang cái ghế trống ở cuối bàn, cái ghế của chị mà không ai dời đi. # scene:ban_an
Dì Ba: Con Hi nó cũng cực. Từ nhỏ tới lớn lúc nào cũng phải lo cho đứa em. Chắc nó cũng mệt, nên mới muốn đi xa một chút cho đỡ...
Chú Ba hắng giọng. Dì Ba vội cười: "À mà dì nói vậy thôi, chứ chị em thương nhau lắm."
Nhật Anh ăn hết bát cơm, chào dì chú, rồi đi lên phòng, lấy cuốn sổ phác thảo ra vẽ. Tới lúc nét chì bắt đầu nhòe ra, cô mới biết mình đang khóc.
Nhật Anh (nghĩ): Chỉ một câu nói thôi, mà câu nói ấy có đủ mọi thứ một câu chuyện cần: một nguyên nhân, một kết quả, và một người có lỗi. Mình là lý do chị đi.
Ba ngày sau đó, cô ăn sáng ở căn tin trường, về nhà khi mọi người đã ăn xong, và đi thẳng lên phòng.
-> chay_sang

= chay_sang
Năm giờ sáng, công viên Sala còn ướt sương, đèn đường chưa tắt. # scene:cong_vien
{luot == 1: Đôi giày chạy bộ Nhật Anh đang mang là của chị Hi. Nó chỉ nói chuyện khi cô chạy, và ngoài cô ra không ai biết chuyện đó.}
Nhật Anh chạy tới vòng thứ hai mới chịu lên tiếng.
Nhật Anh: Này.
Đôi giày: Ô, cô chủ của tôi! Mấy hôm không nói chuyện với tôi, tôi tưởng cô bỏ tôi theo một đôi dép tổ ong nào rồi chứ.
Nhật Anh: Tụi tui thua game.
Đôi giày: À, thua. Thua thế nào?
Cô kể, vừa chạy vừa thở. Một ông chú chạy ngược chiều nhìn cô lẩm bẩm một mình, rồi né sang làn bên kia.
{loai_thua == "rufus":
    Đôi giày: Vậy cô nghĩ vì sao thư viện mất sách?
    Nhật Anh: Vì đám cháy. Ai cũng nói vậy.
    Đôi giày: Ừ. Còn nếu không có đám cháy?
    Nhật Anh: Thì... thì sách vẫn còn.
    Đôi giày: Chắc không?
}
{loai_thua == "myrto":
    Đôi giày: Cô gái ấy mang sách ra khỏi thư viện. Vậy sách trong giỏ cô ấy là sách đã cháy, hay sách chưa từng cháy?
    Nhật Anh: Chưa từng cháy.
    Đôi giày: Vậy cô ấy cứu sách, hay lấy sách? Và nếu sách đã ra khỏi thư viện từ trước đêm lửa, thì đêm lửa có phải lý do chúng biến mất không?
}
{loai_thua == "dorion" or loai_thua == "ga":
    Đôi giày: Cô chọn cái tên ấy vì cô thấy hắn làm gì, hay vì hắn đứng gần chỗ có chuyện?
    Nhật Anh: ...Vì hắn đứng gần.
}
{loai_thua == "khong_doi_chat":
    Đôi giày: Cô đúng. Nhưng ở thành đó, ai được quyền nói một người là có tội?
    Nhật Anh: Ông tư tế.
    Đôi giày: Vậy cô đã cho ông ấy lý do để nghe cô chưa?
}
{loai_thua == "thieu_chung":
    Đôi giày: Hắn nói những câu gì mà các cô không đánh đổ được? Mỗi câu ấy, cô có thể cầm cái gì tới để đặt cạnh nó?
}
Đôi giày im một lúc, để tiếng đế cao su gõ xuống mặt đường đều đều, rồi nói, lần này không trêu nữa.
Đôi giày: Muốn biết một thứ có phải nguyên nhân không, thì thử bỏ nó đi. Không có nó, chuyện có còn xảy ra không? Nếu vẫn xảy ra, thì nó không phải toàn bộ câu chuyện.
Đôi giày: Người ta thích kể chuyện bằng một nguyên nhân thôi, vì một nguyên nhân thì dễ kể, dễ nhớ, và dễ tìm ra người để trách.
{luot == 1: Câu hỏi của đôi giày trượt đi đâu đó, tới cái ghế trống ở cuối bàn ăn, tới câu nói của dì Ba. Nhật Anh vội kéo nó về, đặt lại đúng chỗ của nó: thư viện, đám cháy.}
-> san_bong_ro

= san_bong_ro
Giờ ra chơi chiều, sân bóng rổ sau dãy phòng học vắng người, chỉ có nắng và mấy chiếc lá bàng khô bị gió lùa dưới rổ. # scene:san_bong_ro
Nguyệt tới sau cùng, mặt như người vừa thua một ván bài mà mình cầm bài đẹp nhất bàn. Phúc mở phích trà, rót ra nắp, đưa cho cô.
{co_e_kho:
    Nguyệt: Tớ đã đếm được ba mươi nghìn trong sáu cái kho. Tớ có số liệu của chính mình trong tay, vậy mà tớ đi tin số của ông ta.
- else:
    Nguyệt: Bốn trăm nghìn là con số của ai? Mình nghe một người nói, rồi nghe cả bến cảng nói lại. Chưa ai trong ba đứa đo một cái kho nào.
}
Nguyệt: Tối qua tớ đi tra rồi. Các nguồn cổ ghi mỗi nơi một con số. Seneca ghi số cuộn bị cháy là bốn mươi nghìn. Bốn mươi. Không phải bốn trăm.
{lys >= 2:
    Phúc: Ông Lysandros có nói: "Người ta vẫn xếp sách lên kệ, nhưng không còn ai đọc chúng nữa. Chỉ còn người đếm chúng. Và có người đếm bớt đi." Tớ nghe mà tớ tưởng ông ấy than thở.
- else:
    Phúc: Có một ông cụ ngồi dưới hiên cột ôm cái hộp gỗ. Cả buổi mình đi qua ông ấy mà không ai ngồi xuống nói chuyện.
}
{uong_tra:
    Phúc: Ông Nikanor chặn tớ ở hành lang, bảo khói độc tràn sang. Nhưng hành lang mát rượi, tớ không ngửi thấy mùi khói nào hết.
}
{not co_e_ke:
    Nhật Anh: Cả buổi, mình chưa nhìn tận mắt cái kệ sách nào.
}
{thay_myrto and not co_e_myrto:
    Nguyệt: Còn cô gái ôm giỏ mây. Sách trong giỏ không cháy.
}
{(loai_thua == "khong_doi_chat" or loai_thua == "dorion") and dorion < 2:
    Nguyệt: Ông Theophrastus dặn phải tìm người có quyền xét xử. Người đó ở thành ấy là ai, mình còn chưa ngồi nói chuyện tử tế với ông ấy.
}
Phúc vặn nắp phích trà lại, chặt tay hơn mọi khi.
{uong_tra: Phúc: Lần này, ai rót trà mời tớ, tớ cũng không uống.}
{not uong_tra: Phúc: Lần này mình đi chậm thôi. Hỏi ít người hơn, nhưng hỏi cho tới nơi.}
Tối hôm đó, họ vào lại từ đầu.
-> DONE
