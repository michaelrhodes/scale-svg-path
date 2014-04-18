module.exports = function(segments, sx, sy) {
  sy = (!sy && (sy !== 0)) ? sx : sy

  return segments.map(function(segment) {
    var name  = segment[0].toLowerCase()

    // V & v are the only command, with shifted coords parity
    if (name === 'v') {
      segment[1] *= sy
      return segment
    }

    // ARC is: ['A', rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y]
    // touch rx, ry, x, y only
    if (name === 'a') {
      segment[1] *= sx
      segment[2] *= sy
      segment[6] *= sx
      segment[7] *= sy
      return segment
    }

    // All other commands have [cmd, x1, y1, x2, y2, x3, y3, ...] format
    return segment.map(function(val, i) {
      if (!i) {
        return val
      }
      return val *= i % 2 ? sx : sy
    })
  })
}
