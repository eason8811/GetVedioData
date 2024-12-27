import requests
import execjs
import json

cookies = {
    'appuser': 'B944D75B7CA52889',
    'o_minduid': '7QDqQOZWekac_QjqQuFTrUhYbAIUi8pC',
    'cm_cookie': 'V1,110064&3RuLt0H53BRG&AQEB1H3Oo896LuprIu8mr3m4CUb6UrKleg_G&241213&241213',
    'qq_domain_video_guid_verify': '6ff5b6a91b9aa8f1',
    '_qimei_uuid42': '18c0d091b30100656c7ed7550a748c8d2121d97587',
    'pgv_pvid': '1550944418',
    '_qimei_q36': '',
    '_qimei_h38': 'd70ec5886c7ed7550a748c8d0200000d818c0d',
    '_qimei_fingerprint': '9c3caaa55abb5bc13b3e4e52e5f57da3',
    'vversion_name': '8.2.95',
    'video_omgid': '6ff5b6a91b9aa8f1',
    'pgv_info': 'ssid=s3019545875',
    'Lturn': '741',
    'LKBturn': '650',
    'LPVLturn': '800',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'content-type': 'text/plain;charset=UTF-8',
    # 'cookie': 'appuser=B944D75B7CA52889; o_minduid=7QDqQOZWekac_QjqQuFTrUhYbAIUi8pC; cm_cookie=V1,110064&3RuLt0H53BRG&AQEB1H3Oo896LuprIu8mr3m4CUb6UrKleg_G&241213&241213; qq_domain_video_guid_verify=6ff5b6a91b9aa8f1; _qimei_uuid42=18c0d091b30100656c7ed7550a748c8d2121d97587; pgv_pvid=1550944418; _qimei_q36=; _qimei_h38=d70ec5886c7ed7550a748c8d0200000d818c0d; _qimei_fingerprint=9c3caaa55abb5bc13b3e4e52e5f57da3; vversion_name=8.2.95; video_omgid=6ff5b6a91b9aa8f1; pgv_info=ssid=s3019545875; Lturn=741; LKBturn=650; LPVLturn=800',
    'origin': 'https://v.qq.com',
    'priority': 'u=1, i',
    'referer': 'https://v.qq.com/',
    'sec-ch-ua': '"Microsoft Edge";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0',
}

vid = 'v41002y7xzo'
app_version = '1.37.2'
src_conten_id = 'q4100ob6gms'

# data = '{"buid":"vinfoad","vinfoparam":"charge=0&otype=ojson&defnpayver=3&spau=1&spaudio=0&spwm=1&sphls=2&host=v.qq.com&refer=https%3A%2F%2Fv.qq.com%2Fx%2Fcover%2Fmzc002000y0ehh8%2Fv41002y7xzo.html&ehost=https%3A%2F%2Fv.qq.com%2Fx%2Fcover%2Fmzc002000y0ehh8%2Fv41002y7xzo.html&sphttps=1&encryptVer=9.2&cKey=cjD1RtYS3dm1KM1Orq2-LnCjnpb8Ocr0cPTeqpADzEul_f4uOWcoVWJMR8Gu67M9PVFKgQxFyWoKCp7VHCeQghpmp7rG5tiHjLv_PnnatnPaZfOXktuBpd_IyPdr8oyd0V33-IIK4cMvFjOj-NmZhE-NjjawCzIdF66cdsFdzz5jk70UOmynTHDptaxqIemxrSlkg-M_BbDaBoWksGXkUJYnQqXKgvocvCDoQBra3Bby3kOuy43cijWZzT_2ml3Ph5LKH7TT64IFi3m5pvAjoPAdtjeBPEfwmNLx9gg9S9d4IsvBkc628-O72Zmp4otEepIvwbZhpMynOf7giIpgyagXh5rmP7kge6yqKqYCj8jsvlFcb3YVnPNAWyVKw0glSdkoRJVIeOpoyoEg47t8lfm9bNHNiNnut1POhId4j4oJjMSYNVWUg6L15nSuvqREJ73p93SeJJIBSl0w9AzyikETpKvXpURREdHpRFJ0Iiodv-wUYQUsMgl9dTkEBAQEP3jNzQ&clip=4&guid=6ff5b6a91b9aa8f1&flowid=53c84f9f189413beab7ef4860e91a458&platform=10201&sdtfrom=v1010&appVer=1.37.2&unid=&auth_from=&auth_ext=&vid=v41002y7xzo&defn=&fhdswitch=0&dtype=3&spsrt=2&tm=1735286225&lang_code=0&logintoken=&spvvpay=1&spadseg=3&spvvc=3&spav1=15&hevclv=28&spsfrhdr=0&spvideo=0&spm3u8tag=67&spmasterm3u8=3&track=undefined&srccontenid=q4100ob6gms&drm=296","sspAdParam":"{\\"ad_scene\\":1,\\"pre_ad_params\\":{\\"ad_scene\\":1,\\"user_type\\":0,\\"video\\":{\\"base\\":{\\"vid\\":\\"v41002y7xzo\\",\\"cid\\":\\"mzc002000y0ehh8\\"},\\"is_live\\":false,\\"type_id\\":2,\\"referer\\":\\"\\",\\"url\\":\\"https://v.qq.com/x/cover/mzc002000y0ehh8/v41002y7xzo.html?start=1819&cut_vid=q4100ob6gms&scene_id=3\\",\\"flow_id\\":\\"53c84f9f189413beab7ef4860e91a458\\",\\"refresh_id\\":\\"\\",\\"fmt\\":\\"hd\\"},\\"platform\\":{\\"guid\\":\\"6ff5b6a91b9aa8f1\\",\\"channel_id\\":0,\\"site\\":\\"web\\",\\"platform\\":\\"in\\",\\"from\\":0,\\"device\\":\\"pc\\",\\"play_platform\\":10201,\\"pv_tag\\":\\"\\",\\"support_click_scan_integration\\":true},\\"player\\":{\\"version\\":\\"1.37.1\\",\\"plugin\\":\\"4.1.23\\",\\"switch\\":1,\\"play_type\\":\\"0\\"},\\"token\\":{\\"type\\":0,\\"vuid\\":0,\\"vuser_session\\":\\"\\",\\"app_id\\":\\"\\",\\"open_id\\":\\"\\",\\"access_token\\":\\"\\"},\\"req_extra_info\\":{\\"now_timestamp_s\\":1735282214,\\"ad_frequency_control_time_list\\":{}},\\"extra_info\\":{}}}","adparam":"adType=preAd&vid=v41002y7xzo&sspKey=kqpk"}'

with open('cKeyEncryptV9-2.js', 'r', encoding='UTF-8') as f:
    js_code = f.read()
context = execjs.compile(js_code)
data = context.call("main", vid, app_version, src_conten_id)  # 参数一为函数名，参数二和三为函数的参数
data = json.dumps(data)
print(data)

response = requests.post('https://vd6.l.qq.com/proxyhttp', cookies=cookies, headers=headers, data=data)
print(response.json())
