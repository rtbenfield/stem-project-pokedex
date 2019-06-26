import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip
} from "recharts";
import styled from "styled-components";

const Chart = styled(RadarChart)`
  text-transform: capitalize;
`;

const Stats = ({ pokemon, ...props }) => {
  const data = useMemo(() => {
    return pokemon.stats.map(s => ({
      name: s.stat.name.replace("-", " "),
      value: s.base_stat
    }));
  }, [pokemon.stats]);
  return (
    <ResponsiveContainer height={200} {...props}>
      <Chart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis domain={[0, 255]} />
        <Radar
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Tooltip />
      </Chart>
    </ResponsiveContainer>
  );
};

Stats.propTypes = {
  pokemon: PropTypes.shape({
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        stat: PropTypes.shape({
          name: PropTypes.string.isRequired
        }).isRequired,
        base_state: PropTypes.number.isRequired
      }).isRequired
    ).isRequired
  }).isRequired
};

export default Stats;
