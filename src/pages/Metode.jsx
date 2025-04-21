// src/pages/Metode.jsx
import React from "react";
import { FaCheckCircle, FaFileAlt, FaVideo, FaCertificate } from "react-icons/fa";

const Metode = () => {
  return (
    <div className="bg-[#FFFCEE] min-h-screen p-6">
      {/* Progress Bar */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-green-500 font-medium">
            <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center mr-2">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            Pilih Metode
          </div>
          <div className="w-16 h-1 bg-gray-300 rounded" />
          <div className="text-gray-400">Bayar</div>
          <div className="w-16 h-1 bg-gray-300 rounded" />
          <div className="text-gray-400">Selesai</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Metode Pembayaran */}
        <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow">
          <h2 className="font-semibold text-base mb-4">Metode Pembayaran</h2>

          {/* Transfer Bank */}
          <div className="mb-3">
            <details open className="group">
              <summary className="cursor-pointer py-2 font-semibold text-sm text-gray-700 group-open:mb-2">
                Transfer Bank
              </summary>
              <div className="space-y-2">
                {[
                  { name: "Bank BCA", src: "https://s3-alpha-sig.figma.com/img/4780/86cd/5e1b26b25f1952418685e44371c601ca?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VAncS-cKudlMNOmGOK7qBUe7BE9WAFC6GZttSvYgR5kKp95tZD3jAtHVOEYLkCR1CyYx5LtxywZhhxLt89SJv2lkwDHOGb7WjT7l-c0by8Xd0OmUM6m7EuqcsHLR0G1Ko3rH7gSUoLX~Ji3DifgKQ-y~x342bTsFbGRlKJDLCTBQO7Pi4v3pka7mgeeb2ZB1mBvBbWflLLgaYgA4zlfo~ekFNRQiykVIrSEKhsOHV4l~XwSO0-EUCzD2HyLRLej4O19kfcitYcRmN07klvMRSMDjkvem97wGZlJVM~P6o5OXELdSQX-sG6GlvxVaG~DR2a7wXpheULkhdTD9HFrjiQ__", selected: true },
                  { name: "Bank BNI", src: "https://s3-alpha-sig.figma.com/img/2bbb/de26/8b664e0ee31eeaec647843b0d1abf30e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Zly-tF0hRrzjow4xY0FK9Dgqwg5XAQzgxHTxksVU74fzccQMvR6V12yofdNnXydBpY26SE0lQscKF-5Afn8BJPQZbdf8HfWDYppHClQM9oOnxY0XihnQalaPKik5SaC~y6zA4qnA7IWK4KJYGQJa2BcVP4cgte3VvxwiojphnO9nxWsIAEJ49yfD7HJ5DRXYWf9IQFj83umzVkm4LWDaRQFwJrcUFdpGQW1YWm9b6F9VTS8yAeH8DF7UlRTbnQ6JZrdNaEY1q2z~w-eDjUf7~mG97bwnAoBxAPXtSDllJpxd-yjZc5n-vP7wiFOkSS1IJeFVPjsm0j5xKcar~us06w__" },
                  { name: "Bank BRI", src: "https://s3-alpha-sig.figma.com/img/6519/f5a2/744e6b2a66573aff06c33d60adfb63d9?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EJC6BUeZ7LQgRE0IBKGZxMuJF5LTb9xYPF0DosvLfLkj0QzJ6IE1OqacWjYr89uCMV35o6pUXgs9aD2gXuPE8D42DnjmO5gX0c0GcB596FbMaxkYbt5CYe~fiGhh~vY6-85Cp31rnr~H2nvgo4ccpoV3X44-km~cDYkSAD7A8b0Kp8EMBZ2adSfj87oJTpVOW1Ri4zzUQZQPjmh4CBgibih-Gl55O4ot0AU8wL-kCXDjiK9ltFOWOukbDmeWXE7f-yqNFYCyzhNkRhuHjJW3Ro41Z1q0QpWEgAmIMfTp8cpqfnqnbTFeYRvUj~d3LaxUED08eJgQx1Ydy51rtMZysA__" },
                  { name: "Bank Mandiri", src: "https://s3-alpha-sig.figma.com/img/a65c/72c1/d87a67d17860af824e5c98baa5e34468?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i36Kn665ukVl1G1dLaa54vBNljSupSjT-fNaqxUzFXdCIHBlyvKFd8D1VYxh6srxTH1MoGyfG2cRHOGIaiu4pIPmDaW5g5RnJ5NfDETiIWvTuA5pKN0rJklMJd-l84MzZizJHb5lQURfCBwQpSUKZAMAGZGSA45C4pIqx7jqFcEquJGcLJpdt~nttKfZYYYQK9NBDTA-zPX4eeGFEZv39~tNf2ZJo7ZE1ylIHCu4zgyOu5FFvZReiQr6~3usVOs42vr6ZVA57vVy4c6UygQ4RFHp0nXqdytuJcNso0lla8-pcKYNK~UCe~RvdmKEzsjEcHCdn7Vhe0iTzrc~i0zaxQ__" },
                ].map((bank, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between border rounded-xl p-3 ${
                      bank.selected ? "border-red-500 bg-red-50" : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img src={bank.src} alt={bank.name} className="w-6 h-6" />
                      <span className="text-sm">{bank.name}</span>
                    </div>
                    {bank.selected && (
                      <div className="w-4 h-4 rounded-full border-2 border-red-500 flex items-center justify-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </details>
          </div>

          {/* E-Wallet */}
          <div className="mb-3">
            <details className="group">
              <summary className="cursor-pointer py-2 font-semibold text-sm text-gray-700 group-open:mb-2">
                E-Wallet
              </summary>
              <div className="space-y-2">
                {[
                  { name: "Dana", src: "https://s3-alpha-sig.figma.com/img/e736/34d3/4d5e6d2cfa16568dfbe1c0acad7c479b?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qqQlcTd4Cxst135bRqdTAYu~d7rktZugGxBB~AqmzUrFqDrgqXRVpepcdhalNJviuD4aE3XKnrbKhtCFDurIYypH4E182TJbcG7dS03LriaUXbqMdARDw~C6TyausB0p1gTy0hW2uUkWOwLU6aRanYB2qFn0mW50rFJp9l1FOEiYYmW-XmzymAXBf7Zjgxr5pe-Oj7RHlnRWiQ~sWAYm3cZ~jpg5C98unVYwCTKh4t5GLArhLQPWt-ZUyMhvYN9XcL9C5gJLf5WfDKmQB-mQMKfCzCjWVVMg-WFUMxLwmUltSodJ0IwLzqMEwCGU4NwDgWPc91W~0uyN48o0-Y8vnA__" },
                  { name: "OVO", src: "https://s3-alpha-sig.figma.com/img/5a3e/04a1/5482828372aafc4717934d134ae57433?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MskKns41nlXuTgDu3xClduhYBcb1agFa0fybJMltRpdgZzdpjRTWgkbOtz7-Yu~wf8NMz197PECpktQlFmG73hVOvH8ZiXR01cdpEX1UagfPiazHgqmUDz7pBdMCSTz7OZz8vQebsFEvb~W5WOLcdQnEVhIVbVzvkmLsHHlLjS4Th7M6yOzHOOVT6hIuiVDrPcbIYpr725MpE4WeOCzXNJ4tQjOUtsroW1GOjvfyrPM1pLybU8KnS6C01ngmWV3i-l-M~h5Qk6KeCgvubm4dy2smbnxtZB7nerlsSvG6H8fVPF7oWCO6hB7gmAqjWimfEDoY7JVr1l8uXIIo0ak7jg__" },
                  { name: "LinkAja", src: "https://s3-alpha-sig.figma.com/img/c44f/e82f/7a0a061f1d85b323a6eefd168972fe3f?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Rjea7KUK-Sa9WX7lAcYYAag834jDrndpW~8INXFFopuOlfzy2~r~bQ0xgKueVB7nz~P5LtD44bGIFkdnzUGkME9XyoeBuH4BkIEEEwL4bUZgJzulwfUurTKKlOJfRbCrDZJt-9pxiot8B6UPoa5dM9sflEK1JGD1swuZaCdnf4i04UHNEzdOwFmI4owQxkiqqmCPTVlJBqxJVw-KvdTV0Oq9WI~4au55BCxMfiDzTgGKiGxlvNVswWJE5EpOApz2qi7e~t7HGDYPhlAk4iKiHJy1uGjQrwWzP7KjVZz8oxMR3mheg1iDzH3dwftFs0ASuG3sYVSGI7QLWaI2zo74DA__" },
                  { name: "Shopee Pay", src: "https://s3-alpha-sig.figma.com/img/455c/6cbe/e8dad3500ce79a663aefb684f9303720?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Hd0MQnbrvG7JPdD6k0b8tDm5Zg2RdtCZHcSSSQEAVguWZjJY95DwX2rCTvyoaa83n~PT5IbC9q3a9cJFK2NBmJ6rpoFKk4waLXtUIzEaEXcsRNiWjm4UfVKsnh32i7V58uygX7mVWSARCD9yye1m9eqgbvGVuu7HMJpsNU3ArmvAtjYa0CM3-~n4AYm4YajhGW7aAVGvPJ9NMHnJVddMDnQqZFvq7VcVrI5XgXEFtmq0ymyxh2yuhdVQ3RQtfLwEYQLjij2-Vf-vjUoyL7hR9FZpw01q9GeBFo2D12VCwkty~~qdJW-6vHS26RWWWQEUkExCnG0EsTUQlQsLclD2kw__" },
                ].map((e, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border border-gray-200 rounded-xl p-3"
                  >
                    <div className="flex items-center gap-3">
                      <img src={e.src} alt={e.name} className="w-6 h-6" />
                      <span className="text-sm">{e.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </details>
          </div>

          {/* Kartu Kredit/Debit */}
          <div className="mb-6">
            <details className="group">
              <summary className="cursor-pointer py-2 font-semibold text-sm text-gray-700 group-open:mb-2">
                Kartu Kredit/Debit
              </summary>
              <div className="flex items-center gap-4">
                <img src="https://s3-alpha-sig.figma.com/img/3b24/efe1/fd9b23368d8cd8fc14d46ce8f83b20bc?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QUAuxO4fd-46OtjXMSy4d8OBF~DjV3kwKE016ieAXz7bve4WBn333Zmn9ZoRUZ65l7VbBGcffMNMXZSaTOzVzYjNSU7gQ1skyQZdhE1L99hwF5qN9quDKhAoFv5QkJjG3MPMtpUNDXmoPlEipbaib~prI~s18UZ1kg2kzvQYaDlnMK~ZsNR5igI6PgvcNLr-F7aL29Nv2AJYRJ~AhulIoOVwUQkw0qgCngZOIHvpuE3w5s17iX27n0KlQeKdgiiAJa8l2r8Aig0CplzvB5NxYMoPAWuq6Z-l9Ho-llnSljBr5ePrVk6x3JpnJbwiRx63t2cDjgAdJXeJ3mNtkWTfvg__" alt="Visa" className="h-5" />
                <img src="https://s3-alpha-sig.figma.com/img/bdc8/0081/2b32395fa6f07c0be411356945f3f4d5?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mhOURjPrsXRMPigJbbfbE-aEC6ht8okG038eSXjA-5c2KM7S63Xq8KF1HxPAw~lA-xGZkcyAJoJytMSsQayIsyKDYrx1STTIV8R7V09hhR359SaaIvx3u0djdzJmmaoZAOYpHFn7seURKGLS8ALISs8rlZIfVD-AiwZKpPq4DGK3HMnhFbWoeYCmEtUfne-Pa9hhT60LnGgiJ3Qdgs0VRM0GRYDqjVrfmWpCkTIhHNaBNnJPw0iGI8x6jJGMD~i6Hvsltl-zNLWke3Xt6eznClHArRPeojccmGR1EUI8eBjwmuAfl626V8VEyUT8BRj6xEBrs10dGLn63FetNO33lw__" alt="MasterCard" className="h-5" />
                <img src="https://s3-alpha-sig.figma.com/img/8889/7ee2/e6ab86d79ac00e3c74dbd9f9f3e62849?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KCD0y9lYKstttMBrkgwlopX6W2zH5t9o--xLtutkXivKzUfsLrx5-Ivbp7GMAjma~-Ze5MW~VUkWVM2ryeqE83bCsd3WOz8wcaOF2eqDB4e4DDTTS4~BDIDogPCZP83sFeX~ikV658ClufoKvpUlW3Tn6m-LE2OsJZuDKdvKb7SL6t5BqdvVYduZ5A2PfQgLeup77YJmJjn~LHTYTdgMbe3f0Yew1lfvod01Ubgfn4R8Zrzy4u92cOPZAOefsDpD5DoUcsiO4lZMLxksmsKuvKjxI5MHvljEX17ule13~LQv7zF7riAvJZ6wIK-UT-detIqrolHx0lt0NKvHueTibw__" alt="JCB" className="h-5" />
              </div>
            </details>
          </div>

          {/* Ringkasan Pesanan */}
          <div className="bg-white border-t pt-4 mt-4">
            <h3 className="font-semibold mb-2 text-sm">Ringkasan Pesanan</h3>
            <div className="text-sm text-gray-700 mb-1">
              Video Learning: Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
            </div>
            <div className="flex justify-between text-sm mb-1">
              <span>Rp 767.500</span>
            </div>
            <div className="flex justify-between text-sm mb-1">
              <span>Biaya Admin</span>
              <span>Rp 7.000</span>
            </div>
            <div className="flex justify-between font-semibold text-green-600 mt-2">
              <span>Total Pembayaran</span>
              <span>Rp 774.500</span>
            </div>

            <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition">
              Beli Sekarang
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="bg-white rounded-2xl p-4 shadow">
          <img
            src="https://s3-alpha-sig.figma.com/img/178e/6743/8c9e6fbe4978be3387d7b68741986339?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kCp-dgp7NMR5p7dyroWxNfqSVjMLYSkllrwoP9XMeOMRPA-kILmPQmryxjQbZxmwqz3AVs5ammRI~m1HweBt-PkDde-i63BcmmLrdwfz-k7J49z9cNva4TvIfjPr3VoNmYSW6H1gBtsxoj9mEQqR1hHHjNTDswZ5wZfnkoUvNlx8i7VkreprEsl1WvnH~ROqFLoZY5b~BH4COHWrE6V1C0Q3RebZiHdxjNsywhWD60i2RenFTvbY6fdy8ix53B5l2OBzPsCZfs9b78SSxuoPaItZ6EsqAO~XbqwWxJqALKZcOd0YliNOFzaWXUyILgWzC~YTI3aM2uxD2SrFWzv-Ng__"
            alt="Thumbnail"
            className="rounded-lg mb-3"
          />
          <h4 className="text-sm font-semibold mb-1">
            Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
          </h4>
          <p className="text-green-600 text-xl font-bold mb-1">
            Rp 250K <span className="line-through text-sm text-gray-400 ml-1">Rp 600K</span>
          </p>
          <p className="text-xs text-orange-500 mb-3">Diskon 55%</p>

          <div className="space-y-1 text-xs text-gray-700 mb-3">
            <div className="flex items-center gap-2"><FaCheckCircle /> Ujian Akhir</div>
            <div className="flex items-center gap-2"><FaVideo /> 49 Video</div>
            <div className="flex items-center gap-2"><FaFileAlt /> 7 Dokumen</div>
            <div className="flex items-center gap-2"><FaCertificate /> Sertifikat</div>
            <div className="flex items-center gap-2"><FaCheckCircle /> Pretest</div>
          </div>

          <p className="text-xs text-gray-500">Bahasa Pengantar: Bahasa Indonesia</p>
        </div>
      </div>
    </div>
  );
};

export default Metode;
