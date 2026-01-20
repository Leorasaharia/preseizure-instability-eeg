# Early-Warning Signals of Neural Instability from EEG

This project investigates whether **neural time-series signals exhibit early-warning indicators of instability prior to epileptic seizure onset**, inspired by concepts from **dynamical systems theory** rather than black-box classification.

Unlike conventional EEG studies that focus on seizure detection, this work explores **pre-seizure brain dynamics** using **interpretable statistical features**.

---

## 🧠 Motivation

Complex systems approaching a critical transition often show characteristic warning signs, including:

- Increased signal variance
- Rising autocorrelation
- Slower recovery from perturbations (critical slowing down)

This project examines whether such phenomena appear in **scalp EEG recordings** before seizures, providing insight into **neural instability rather than event detection**.

---

## 📊 Dataset

**CHB-MIT Scalp EEG Database**  
- 23 pediatric epilepsy patients  
- Multi-channel scalp EEG  
- Sampling rate: 256 Hz  
- Expert-annotated seizure onsets  

Dataset source:  
https://physionet.org/content/chbmit/1.0.0/

---

## ⚙️ Methodology

1. **EEG Loading & Preprocessing**
   - EDF file reading using MNE
   - Bandpass filtering (1–40 Hz)
   - Channel normalization

2. **Window-Based Feature Extraction**
   - Sliding temporal windows
   - Computation of early-warning metrics:
     - Variance
     - Lag-1 autocorrelation
     - Recovery time estimates

3. **Comparative Analysis**
   - Pre-seizure windows vs baseline EEG
   - Statistical testing (Welch’s t-test)
   - Interpretable machine learning for feature relevance

4. **Visualization**
   - Temporal feature trends
   - Feature importance plots
   - Raw EEG visualization around seizure onset

---

## 📈 Key Findings

- Early-warning features increase significantly prior to seizure onset  
- Pre-seizure EEG exhibits measurable instability patterns  
- Statistical tests confirm strong separation between baseline and pre-seizure states  

These results support the hypothesis that **EEG signals encode early instability markers**, offering insight beyond seizure detection.

---

## 🧪 Tools & Libraries

- Python  
- MNE  
- NumPy  
- SciPy  
- Pandas  
- Matplotlib  

---

## 🗂 Repository Structure

```text
├── data/
│   └── chbmit_data/
├── notebooks/
│   └── eeg_instability_analysis.ipynb
├── frontend files
└── README.md
