// Bilgi veritabanı (Detayları burada tutuyoruz)
const info = {
    "Python": "Python: Okunabilirlik ve çok yönlülük odaklıdır. Genellikle backend, veri bilimi ve yapay zeka projelerinde kullanılır. Öğrenilmesi en kolay dillerden biridir.",
    "JavaScript": "JavaScript: Frontend’in kalbidir, ancak Node.js ile Backend'de de güçlüdür. React, Vue, Angular gibi kütüphanelerle modern webin temelini oluşturur.",
    "HTML5": "HTML5: Tüm içeriğin yapısını tanımlar. Semantik etiketler ve modern form elemanları sunar. Her web sayfasının olmazsa olmazıdır.",
    "CSS3": "CSS3: Stil ve düzeni belirler. Flexbox ve Grid gibi güçlü düzen sistemleri ile karmaşık tasarımları mümkün kılar. Animasyon desteği de sunar.",
    "Flask": "Flask: Python ile hızlı prototipleme ve API geliştirmek için süper bir araçtır. Minimalist yapısı sayesinde küçük ve orta ölçekli projeler için idealdir.",
    "SQL": "SQL: Veritabanı ile konuşmanızı sağlar (Sorgulama, Güncelleme, Silme). Veri depolama ve sorgulama için tüm ilişkisel veritabanlarında gereklidir.",
    "C#": "C#: Güçlü, tip güvenli ve kurumsal uygulamalar için popülerdir. .NET Core ile platformlar arası çalışabilir ve Unity ile oyun geliştirmede kullanılır.",
    "React": "React: Meta tarafından geliştirilen popüler bir kullanıcı arayüzü kütüphanesidir. Büyük projelerde arayüz yönetimini ve bileşen tabanlı geliştirmeyi kolaylaştırır.",
    "Git": "Git & GitHub: Versiyon kontrol sistemidir. Kodunuzun geçmişini tutar, projelerinizi dünyaya açmanızı sağlar ve ekip çalışmasını mümkün kılar."
};

// DOM elemanlarını seçme
const detailBox = document.getElementById('detail-box');
const detailTitle = document.getElementById('detail-title');
const detailContent = document.getElementById('detail-content');

// Yeni Görüntüleme Fonksiyonu
function showInfo(languageName) {
    const detailText = info[languageName];

    detailTitle.innerText = languageName + " Detayları";
    detailContent.innerText = detailText;
    
    // Kutuyu görünür yap ve CSS animasyonunu tetikle
    detailBox.style.display = 'block'; 
    // Küçük bir gecikme ekleyerek tarayıcının display:block değişimini işlemesini sağlıyoruz
    setTimeout(() => {
        detailBox.classList.add('active');
    }, 10); 
}

// Kapatma Fonksiyonu
function closeDetail() {
    // CSS animasyonunu tersine çevir
    detailBox.classList.remove('active');
    
    // Animasyon bittikten sonra gizle
    detailBox.addEventListener('transitionend', function handler() {
        if (!detailBox.classList.contains('active')) {
             detailBox.style.display = 'none';
        }
        detailBox.removeEventListener('transitionend', handler);
    });
}