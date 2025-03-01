function calculateHerShieldField() {
    // 獲取用戶輸入的值
    const ρ = parseFloat(document.getElementById('chargeDensity').value);
    const Eplasma = parseFloat(document.getElementById('plasmaEnergyDensity').value);
    const Bsolar = parseFloat(document.getElementById('solarMagneticField').value);
    const α = parseFloat(document.getElementById('alpha').value);
    const β = parseFloat(document.getElementById('beta').value);

    // 常數
    const ε0 = 8.854187817e-12; // 真空介電常數 (F/m)
    const c = 299792458; // 光速 (m/s)
    const μ0 = 4 * Math.PI * 1e-7; // 真空磁導率 (H/m)

    // 計算 HerShield Field (FHe)
    const FHe = α * (Eplasma * c ** 2) + β * (Bsolar * μ0);

    // 計算電場發散 (∇⋅E)
    const divergenceE = ρ / ε0 + FHe;

    // 顯示結果
    document.getElementById('result').innerText = `HerShield Field (FHe): ${FHe.toExponential(2)} N\n電場發散 (∇⋅E): ${divergenceE.toExponential(2)} N/m²`;
}