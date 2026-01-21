# Pre‑Seizure Neural Instability Detection using EEG

> **A research‑oriented project exploring early‑warning neural instability patterns prior to epileptic seizures using EEG signal analysis and machine learning, paired with an interactive web frontend.**

---

## 📂 Repository Structure & Branching

This repository intentionally uses **two branches** to clearly separate research and deployment concerns:

### 🔹 `main` branch — *Research & Model Development*

Contains everything related to **data analysis, signal processing, model training, and results generation**.

**Key contents:**

* `eeg_neural_instability.ipynb` — Google Colab notebook used for:

  * EEG signal loading & preprocessing (EDF files)
  * Feature extraction
  * Neural instability metric computation
  * Baseline vs pre‑seizure comparison
  * Visualization of early‑warning signals
* `dataset/`

  * Includes EEG dataset files and a **dataset README** describing the source, format, and usage
* `*.edf.seizures` — Sample EEG seizure recordings used in experiments

👉 **Use this branch if you are interested in the ML / signal‑processing research.**

---

### 🔹 `master` branch — *Frontend & Deployment*

Contains the **React + Vite frontend** used to present the project concept, visuals, and outcomes.

**Key contents:**

* `src/`, `public/` — Frontend source code
* TailwindCSS configuration
* Vite configuration
* Optimized production build

🌐 **Live Deployment:**

* **Vercel App:** [https://preseizure-instability-eeg.vercel.app](https://preseizure-instability-eeg.vercel.app)

👉 **Use this branch if you are interested in the UI, presentation, or demo.**

---

## 🧠 Research Objective

Epileptic seizures are often preceded by subtle but measurable changes in neural dynamics. This project investigates whether **EEG‑derived instability metrics** can act as **early‑warning indicators** before seizure onset.

The goal is **not seizure classification**, but **pre‑seizure instability detection**, which is crucial for:

* Preventive alert systems
* Neuro‑monitoring research
* Future closed‑loop intervention systems

---

## ⚙️ Methodology (Research Branch)

1. **EEG Data Acquisition**

   * Multi‑channel EEG signals (EDF format)
   * Seizure‑annotated recordings

2. **Preprocessing**

   * Channel selection
   * Noise handling
   * Windowed signal segmentation

3. **Feature Extraction**

   * Time‑domain statistical features
   * Signal variability & instability measures

4. **Neural Instability Metric**

   * Computed over sliding windows
   * Compared between baseline and pre‑seizure periods

5. **Visualization & Analysis**

   * Raw EEG signal plots
   * Zoomed seizure windows
   * Temporal instability trends
   * Feature importance analysis

---

## 📊 Outcomes & Visual Results

The following results were generated from `eeg_neural_instability.ipynb`:

### 1️⃣ Raw EEG Signal Visualization

* Multi‑channel EEG traces plotted over long durations
* Highlights the complexity and non‑stationary nature of neural signals
<img width="770" height="793" alt="image" src="https://github.com/user-attachments/assets/585339d3-02b8-458d-84a3-f96a720bf5d6" />

### 2️⃣ Seizure Window Zoom‑In

* Focused visualization around seizure onset
* Clear increase in signal intensity and irregularity
<img width="770" height="816" alt="image" src="https://github.com/user-attachments/assets/6525f19e-691f-4f0e-af6a-2d4686bde5da" />



### 3️⃣ Early‑Warning Neural Instability Trend

* **Baseline vs Pre‑Seizure comparison**
* Observable deviation in instability metric **before** seizure onset
* Indicates presence of early neural destabilization
<img width="872" height="393" alt="image" src="https://github.com/user-attachments/assets/1b4b76ad-ddcb-43a3-92d6-760140a38465" />



### 4️⃣ Feature Importance (Early‑Warning Signals)

* Identifies which extracted features contribute most to instability detection
* Useful for future feature pruning and model optimization
<img width="556" height="435" alt="image" src="https://github.com/user-attachments/assets/73a09c01-0170-41a8-93d3-bd25839b0070" />
<img width="691" height="393" alt="image" src="https://github.com/user-attachments/assets/570e2901-a533-480f-a2e4-3ee943ee59a4" />



> These outcomes support the hypothesis that seizures are preceded by measurable instability rather than abrupt onset.

---

## 🧪 Dataset Information

Detailed dataset documentation is available inside:

```
dataset/README.md
```

It includes:

* Dataset source
* File format (EDF)
* Channel details
* Seizure annotation notes
* Ethical and academic usage disclaimer

---

## 🖥️ Frontend Overview (Master Branch)

The frontend serves as a **research showcase layer**, not a medical diagnostic tool.

**Features:**

* Clean research‑focused UI
* Explanation of the project concept
* Visual emphasis on EEG instability analysis
* Deployed using Vercel

**Tech Stack:**

* React + Vite
* Tailwind CSS
* JavaScript

---

## 🚀 How to Use

### Research / Notebook

1. Switch to `main` branch
2. Open `eeg_neural_instability.ipynb` in Google Colab
3. Upload dataset files if required
4. Run cells sequentially

### Frontend

1. Switch to `master` branch
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start development server:

   ```bash
   npm run dev
   ```

---

## ⚠️ Disclaimer

This project is **for academic and research purposes only**.
It is **not a medical device** and should not be used for clinical diagnosis or treatment.

---

## 📌 Future Scope

* Larger patient‑wise validation
* Deep learning‑based temporal modeling
* Real‑time EEG streaming
* Integration with wearable EEG hardware
* Closed‑loop seizure prevention research

---

## 👤 Author

**Leora Saharia**
Biomedical Engineering

---

If you're evaluating this from a **research, biomedical AI, or neuro‑engineering perspective**, start with the **`main` branch**.
If you're evaluating it from a **product, demo, or presentation perspective**, start with the **`master` branch**.
