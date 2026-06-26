import { isNotEmpty } from '@mantine/form';

export const getStreamSettingsFormInitialValues = () => {
  return {
    default_user_agent: '',
    default_stream_profile: '',
    m3u_hash_key: [],
    default_output_format: 'mpegts',
    hdhr_output_profile_id: null,
    enrich_epg_titles: false,
    enrich_include_subtitle: true,
    enrich_subtitle_separator: ' - ',
    enrich_show_live: true,
    enrich_show_new: true,
    enrich_indicator_position: 'prefix',
  };
};

export const getStreamSettingsFormValidation = () => {
  return {
    default_user_agent: isNotEmpty('Select a user agent'),
    default_stream_profile: isNotEmpty('Select a stream profile'),
  };
};
