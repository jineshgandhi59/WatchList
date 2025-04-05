import scipy

def percentile_to_z(percentile):
    return scipy.stats.norm.ppf(percentile / 100)  # Convert percentage to probability

# Example usage:
percentile = 93.32
z_score = percentile_to_z(percentile)
print(f"The Z-score for percentile {percentile}% is {z_score:.2f}")
